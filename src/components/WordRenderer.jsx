import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { AudioSystem } from '../audio/AudioSystem.js';

/**
 * WordRenderer - A 3D text animation component that spawns words from predefined buckets,
 * animates them moving through 3D space, and ensures they stop at visible positions.
 *
 * Words spawn at a far distance, move rapidly toward the camera, slow down as they approach
 * their target position, pause briefly when stopped, then fade out and are removed.
 */
export default function WordRenderer({
  // Word collections organized by theme
  buckets = [
    ['fence', 'border', 'sky', 'drone', 'siren', 'distance', 'refuge', 'broken', 'gone', 'safe', 'aaaaaaaaaa'],
    ['university', 'home', 'window', 'elderberry', 'hand', 'laundry', 'morning', 'neighbor', 'family', 'sleep'],
    ['see', 'breathe', 'wait', 'hold', 'remember', 'silence', 'moment', 'space', 'time', 'near'],
    ['alone', 'waiting', 'grief', 'tenderness', 'courage', 'care', 'loss', 'return', 'belong', 'pause'],
  ],
  // Animation timing (milliseconds)
  visiblePause = 1000, // How long words stay visible when stopped
  spawnInterval = 700, // Time between spawning new words
  betweenPause = 500, // Unused parameter (legacy)
  // 3D positioning
  startZ = -7500, // Far distance where words spawn
  stopZ = -1050, // Target distance where words should stop
  slowDistance = 600, // Distance from target to start slowing down
  rapidSpeed = 3500, // Speed of word movement (units per second)
  fadeDuration = 600, // How long fade-out animation takes
  // Text rendering
  canvasWidth = 1024, // Canvas width for text texture generation
  canvasHeight = 256, // Canvas height for text texture generation
  edgeMargin = 50, // Minimum pixels from screen edge for word visibility
  // Custom word system
  customEvery = 5, // Use custom words every Nth spawn
  customMaxSize = 10, // Maximum custom words before overwriting buckets
  customMaxChars = 11, // Character limit for custom words
  // Audio system
  enableAudio = true, // Enable/disable audio generation
  audioVolume = 0.3, // Master volume (0-1)
  baseOctave = 4, // Base octave for note generation
}) {
  // DOM and animation references
  const mountRef = useRef(null); // Three.js canvas mount point
  const animationRef = useRef(null); // Animation loop ID
  const spawnTimerRef = useRef(null); // Word spawning timer
  const audioSystemRef = useRef(null); // Audio system reference

  // Custom word management
  const [customBucket, setCustomBucket] = useState([]);
  const customRef = useRef([]); // Ref for accessing custom words in callbacks
  useEffect(() => {
    customRef.current = customBucket;
  }, [customBucket]);

  // Word bucket management
  const bucketsRef = useRef(buckets.map(b => [...b]));
  const setBucketsState = useState(bucketsRef.current.map(b => [...b]))[1];
  const overwriteCounterRef = useRef(0); // Tracks which bucket to overwrite next

  // Configuration object (stable reference for useEffect)
  const cfg = useRef({
    visiblePause,
    spawnInterval,
    betweenPause,
    startZ,
    stopZ,
    slowDistance,
    rapidSpeed,
    fadeDuration,
    canvasWidth,
    canvasHeight,
    edgeMargin,
    customEvery,
    customMaxSize,
    customMaxChars,
    enableAudio,
    audioVolume,
    baseOctave,
  }).current;

  const [inputValue, setInputValue] = useState('');
  const [audioEnabled, setAudioEnabled] = useState(false); // Start with audio off
  const [pulseRate, setPulseRate] = useState(0.15);

  // Handle audio system initialization when audioEnabled changes
  useEffect(() => {
    if (audioEnabled && !audioSystemRef.current) {
      const audioSystem = new AudioSystem({
        volume: cfg.audioVolume,
        baseOctave: cfg.baseOctave,
        pulseRate: pulseRate,
      });

      audioSystemRef.current = audioSystem;

      audioSystem.initialize().then(() => {
        audioSystem.startBackground(cfg.spawnInterval);
      });
    } else if (!audioEnabled && audioSystemRef.current) {
      audioSystemRef.current.dispose();
      audioSystemRef.current = null;
    }
  }, [audioEnabled]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Initialize Three.js renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    mount.appendChild(renderer.domElement);

    // Create scene with black background and camera
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    const camera = new THREE.PerspectiveCamera(50, mount.clientWidth / mount.clientHeight, 0.1, 10000);
    scene.add(new THREE.AmbientLight(0xffffff, 1));

    // Track active word objects and spawn counter
    const active = [];
    const spawnCounter = { current: 0 };

    // Audio system is now handled by useEffect hook

    // Creates a canvas texture with rendered text
    const makeTextTexture = word => {
      const canvas = document.createElement('canvas');
      canvas.width = cfg.canvasWidth;
      canvas.height = cfg.canvasHeight;

      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `bold ${Math.floor(canvas.height * 0.6)}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#fff';
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;

      // Draw text with black outline and white fill
      ctx.strokeText(word, canvas.width / 2, canvas.height / 2);
      ctx.fillText(word, canvas.width / 2, canvas.height / 2);

      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.generateMipmaps = false;

      return { tex: texture, canvas };
    };

    // Creates a 3D mesh from a word string
    const makeMesh = word => {
      const { tex, canvas } = makeTextTexture(word);
      const height = 200;
      const width = height * (canvas.width / canvas.height);
      const geometry = new THREE.PlaneGeometry(width, height);
      const material = new THREE.MeshBasicMaterial({
        map: tex,
        transparent: true,
        depthTest: true,
        depthWrite: false,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.userData = { texWidth: width, texHeight: height };
      return mesh;
    };

    /**
     * Ensures words stop at positions where they're fully visible within screen bounds.
     * If a word would be clipped at its target position, moves it farther back until it fits.
     */
    const clampTarget = (mesh, x, y, z) => {
      const tempPos = mesh.position.clone();
      mesh.position.set(x, y, z);
      mesh.updateMatrixWorld();

      // Calculate bounding box corners in world space
      const box = new THREE.Box3().setFromObject(mesh);
      const size = box.getSize(new THREE.Vector3());
      const corners = [
        new THREE.Vector3(x - size.x / 2, y - size.y / 2, z),
        new THREE.Vector3(x + size.x / 2, y - size.y / 2, z),
        new THREE.Vector3(x - size.x / 2, y + size.y / 2, z),
        new THREE.Vector3(x + size.x / 2, y + size.y / 2, z),
      ];

      // Project to screen coordinates and check if within bounds
      const screenCorners = corners.map(corner => {
        const projected = corner.clone();
        projected.project(camera);
        return {
          x: ((projected.x + 1) * mount.clientWidth) / 2,
          y: ((-projected.y + 1) * mount.clientHeight) / 2,
        };
      });

      const margin = cfg.edgeMargin;
      const isOutside = screenCorners.some(
        corner =>
          corner.x < margin ||
          corner.x > mount.clientWidth - margin ||
          corner.y < margin ||
          corner.y > mount.clientHeight - margin
      );

      mesh.position.copy(tempPos); // Restore original position

      if (isOutside) {
        // Move word farther back in steps until it fits within screen bounds
        let testZ = z;
        const stepSize = 50;
        const maxSteps = Math.abs((z - cfg.startZ) / stepSize);

        for (let step = 0; step < maxSteps; step++) {
          testZ -= stepSize; // Move farther from camera

          // Test visibility at this position
          mesh.position.set(x, y, testZ);
          mesh.updateMatrixWorld();

          const testBox = new THREE.Box3().setFromObject(mesh);
          const testSize = testBox.getSize(new THREE.Vector3());
          const testCorners = [
            new THREE.Vector3(x - testSize.x / 2, y - testSize.y / 2, testZ),
            new THREE.Vector3(x + testSize.x / 2, y - testSize.y / 2, testZ),
            new THREE.Vector3(x - testSize.x / 2, y + testSize.y / 2, testZ),
            new THREE.Vector3(x + testSize.x / 2, y + testSize.y / 2, testZ),
          ];

          const testScreenCorners = testCorners.map(corner => {
            const projected = corner.clone();
            projected.project(camera);
            return {
              x: ((projected.x + 1) * mount.clientWidth) / 2,
              y: ((-projected.y + 1) * mount.clientHeight) / 2,
            };
          });

          const testIsOutside = testScreenCorners.some(
            corner =>
              corner.x < margin ||
              corner.x > mount.clientWidth - margin ||
              corner.y < margin ||
              corner.y > mount.clientHeight - margin
          );

          if (!testIsOutside) {
            mesh.position.copy(tempPos);
            return new THREE.Vector3(x, y, testZ);
          }
        }

        // Fallback: place at safe distance if no good position found
        mesh.position.copy(tempPos);
        return new THREE.Vector3(x, y, cfg.startZ + 1000);
      }

      return new THREE.Vector3(x, y, z);
    };

    // Selects a word from buckets or custom words
    const pickWord = () => {
      spawnCounter.current += 1;
      const useCustom = customRef.current.length > 0 && spawnCounter.current % cfg.customEvery === 0;

      if (useCustom) {
        return customRef.current[Math.floor(Math.random() * customRef.current.length)];
      }

      const buckets = bucketsRef.current;
      const bucketIndex = Math.floor(Math.random() * buckets.length);
      const bucket = buckets[bucketIndex];
      return bucket[Math.floor(Math.random() * bucket.length)];
    };

    // Creates and spawns a new word into the scene
    const spawn = () => {
      const word = pickWord();
      const mesh = makeMesh(word);

      // Play audio for this word
      if (audioSystemRef.current) {
        audioSystemRef.current.playWord(word);
      }

      // Start at random position at far distance
      mesh.position.set(
        (Math.random() - 0.5) * (mount.clientWidth / 2),
        (Math.random() - 0.5) * (mount.clientHeight / 2),
        cfg.startZ
      );
      mesh.material.opacity = 1;
      scene.add(mesh);

      // Calculate target position with some randomness
      const desired = new THREE.Vector3(
        mesh.position.x + (Math.random() - 0.5) * 900,
        mesh.position.y + (Math.random() - 0.5) * 600,
        cfg.stopZ + (Math.random() - 0.5) * 120
      );

      // Ensure target position keeps word visible
      const target = clampTarget(mesh, desired.x, desired.y, desired.z);
      const direction = new THREE.Vector3().subVectors(target, mesh.position).normalize();
      const velocity = direction.multiplyScalar(cfg.rapidSpeed);

      // Add to active words with initial state
      active.push({
        mesh,
        target,
        velocity,
        state: 'moving',
        pauseUntil: 0,
        fadeStart: 0,
        word, // Store word for potential audio callbacks
      });
    };

    // Start spawning words and initial spawn
    spawnTimerRef.current = setInterval(spawn, cfg.spawnInterval);
    spawn();

    // Main animation loop
    let lastTime = performance.now();
    const loop = () => {
      const now = performance.now();
      const deltaTime = (now - lastTime) / 1000;
      lastTime = now;

      // Update each active word based on its current state
      for (let i = active.length - 1; i >= 0; i--) {
        const word = active[i];
        const mesh = word.mesh;

        switch (word.state) {
          case 'moving':
            // Move rapidly toward target, switch to slowing when close
            if (Math.abs(word.target.z - mesh.position.z) < cfg.slowDistance) {
              word.state = 'slowing';
            } else {
              mesh.position.add(word.velocity.clone().multiplyScalar(deltaTime));
            }
            break;

          case 'slowing':
            // Smoothly approach target position
            mesh.position.lerp(word.target, 1 - Math.exp(-6 * deltaTime));
            if (mesh.position.distanceTo(word.target) < 1) {
              mesh.position.copy(word.target);
              word.state = 'stopped';
              word.pauseUntil = now + cfg.visiblePause;
            }
            break;

          case 'stopped':
            // Wait at target position for specified duration
            if (now >= word.pauseUntil) {
              word.state = 'fading';
              word.fadeStart = now;
            }
            break;

          case 'fading':
            // Fade out and remove when complete
            const fadeProgress = Math.min(1, (now - word.fadeStart) / cfg.fadeDuration);
            mesh.material.opacity = 1 - fadeProgress;

            if (fadeProgress >= 1) {
              // Clean up resources and remove from scene
              scene.remove(mesh);
              if (mesh.material.map) mesh.material.map.dispose();
              mesh.geometry.dispose();
              mesh.material.dispose();
              active.splice(i, 1);
            }
            break;
        }
      }

      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(loop);
    };

    animationRef.current = requestAnimationFrame(loop);

    // Handle window resize
    const onResize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    // Cleanup function
    return () => {
      cancelAnimationFrame(animationRef.current);
      clearInterval(spawnTimerRef.current);
      window.removeEventListener('resize', onResize);

      // Clean up audio system
      if (audioSystemRef.current) {
        audioSystemRef.current.dispose();
        audioSystemRef.current = null;
      }

      // Clean up all active words
      active.forEach(word => {
        scene.remove(word.mesh);
        if (word.mesh.material.map) word.mesh.material.map.dispose();
        word.mesh.geometry.dispose();
        word.mesh.material.dispose();
      });

      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  // Adds a custom word to the custom bucket or overwrites a predefined bucket when full
  function handleAddWord(wordRaw) {
    const word = wordRaw.trim().slice(0, cfg.customMaxChars);
    if (!word) return;

    setCustomBucket(prev => {
      if (prev.length < cfg.customMaxSize) {
        return [...prev, word];
      }

      // When custom bucket is full, overwrite one of the predefined buckets
      const targetBucket = 1 + (overwriteCounterRef.current % 4);
      bucketsRef.current[targetBucket] = [...prev];
      setBucketsState(bucketsRef.current.map(b => [...b]));
      overwriteCounterRef.current += 1;
      return [word];
    });
  }

  // Input event handlers
  function handleInputKeyDown(e) {
    e.stopPropagation();
    if (e.key === 'Enter') {
      handleAddWord(inputValue);
      setInputValue('');
    }
  }

  function handleInputChange(e) {
    setInputValue(e.target.value.slice(0, cfg.customMaxChars));
  }

  function stopMouse(e) {
    e.stopPropagation();
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', background: 'black' }}>
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
      <div
        onMouseDown={stopMouse}
        style={{ position: 'absolute', left: 12, top: 12, zIndex: 20, color: 'white', fontFamily: 'sans-serif' }}
      >
        <input
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          placeholder={`Type a word, press Enter`}
          style={{
            padding: 8,
            borderRadius: 6,
            border: '1px solid rgba(255,255,255,0.18)',
            background: 'rgba(0,0,0,0.4)',
            color: 'white',
          }}
        />
        <div style={{ fontSize: 12, opacity: 0.8, marginTop: 6, display: 'none' }}>
          Custom bucket used every {cfg.customEvery}th spawn. Next overwrite: #{1 + (overwriteCounterRef.current % 4)}
        </div>
        <div style={{ marginTop: 6, fontSize: 13, display: 'none' }}>
          Custom bucket ({customBucket.length}/{cfg.customMaxSize}): {customBucket.join(', ') || 'empty'}
        </div>
        <div style={{ marginTop: 8, fontSize: 12 }}>
          <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={audioEnabled}
              onChange={e => {
                setAudioEnabled(e.target.checked);
              }}
              style={{ marginRight: 6 }}
            />
            Audio Experience
          </label>
        </div>
      </div>
    </div>
  );
}
