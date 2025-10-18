import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function WordRenderer({
  buckets = [
    // 1. Words of Conflict and Survival
    ["fence", "border", "sky", "drone", "siren", "distance", "refuge", "broken", "gone", "safe", "aaaaaaaaaa"],
    // 2. Words of the Everyday
    ["university", "home", "window", "elderberry", "hand", "laundry", "morning", "neighbor", "family", "sleep"],
    // 3. Words of Presence and Perception
    ["see", "breathe", "wait", "hold", "remember", "silence", "moment", "space", "time", "near"],
    // 4. Emotional / Existential Undercurrent
    ["alone", "waiting", "grief", "tenderness", "courage", "care", "loss", "return", "belong", "pause"],
  ],
  visiblePause = 1000,
  spawnInterval = 700,
  betweenPause = 500,
  startZ = -7500,
  stopZ = -1050,
  slowDistance = 600,
  rapidSpeed = 3500,
  fadeDuration = 600,
  canvasWidth = 1024,
  canvasHeight = 256,
  viewMargin = 0.12,
  customEvery = 5,
  customMaxSize = 10,
  customMaxChars = 11,
}) {
  const mountRef = useRef(null);
  const animationRef = useRef(null);
  const spawnTimerRef = useRef(null);

  const [customBucket, setCustomBucket] = useState([]);
  const customRef = useRef([]);
  useEffect(() => { customRef.current = customBucket; }, [customBucket]);

  const bucketsRef = useRef(buckets.map(b => [...b]));
  const [bucketsState, setBucketsState] = useState(bucketsRef.current.map(b=>[...b]));
  const overwriteCounterRef = useRef(0);

  const cfg = useRef({
    visiblePause, spawnInterval, betweenPause,
    startZ, stopZ, slowDistance, rapidSpeed,
    fadeDuration, canvasWidth, canvasHeight, viewMargin,
    customEvery, customMaxSize, customMaxChars,
  }).current;

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    const camera = new THREE.PerspectiveCamera(50, mount.clientWidth / mount.clientHeight, 0.1, 10000);
    scene.add(new THREE.AmbientLight(0xffffff, 1));

    const active = [];
    const spawnCounter = { current: 0 };

    const makeTextTexture = (word) => {
      const c = document.createElement('canvas'); c.width=cfg.canvasWidth; c.height=cfg.canvasHeight;
      const ctx = c.getContext('2d'); ctx.clearRect(0,0,c.width,c.height);
      ctx.font = `bold ${Math.floor(c.height*0.6)}px sans-serif`; ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.fillStyle='#fff';
      ctx.strokeStyle='#000'; ctx.lineWidth=2;
      ctx.strokeText(word, c.width/2, c.height/2);
      ctx.fillText(word, c.width/2, c.height/2);
      const tex = new THREE.CanvasTexture(c); tex.minFilter=THREE.LinearFilter; tex.magFilter=THREE.LinearFilter; tex.generateMipmaps=false;
      return { tex, canvas: c };
    };

    const makeMesh = (word) => {
      const { tex, canvas } = makeTextTexture(word);
      const h=200; const w=h*(canvas.width/canvas.height);
      const geom = new THREE.PlaneGeometry(w,h);
      const mat = new THREE.MeshBasicMaterial({ map: tex, transparent:true, depthTest:true, depthWrite:false });
      const m = new THREE.Mesh(geom, mat); m.userData={texWidth:w, texHeight:h}; return m;
    };

    const toNDC = (v) => { const p=v.clone(); p.project(camera); return p; };
    const clampTarget = (mesh,x,y,z)=>{ return new THREE.Vector3(x,y,z); };

    const pickWord = () => {
      spawnCounter.current += 1;
      const useCustom = (customRef.current.length>0) && (spawnCounter.current % cfg.customEvery === 0);
      if(useCustom) return customRef.current[Math.floor(Math.random()*customRef.current.length)];
      const b = bucketsRef.current; const bi=Math.floor(Math.random()*b.length); const bucket=b[bi]; return bucket[Math.floor(Math.random()*bucket.length)];
    };

    const spawn = () => {
      const word = pickWord();
      const mesh = makeMesh(word);
      mesh.position.set((Math.random()-0.5)*(mount.clientWidth/2),(Math.random()-0.5)*(mount.clientHeight/2),cfg.startZ);
      mesh.material.opacity=1; scene.add(mesh);
      const desired=new THREE.Vector3(mesh.position.x+(Math.random()-0.5)*900, mesh.position.y+(Math.random()-0.5)*600, cfg.stopZ+(Math.random()-0.5)*120);
      const target = clampTarget(mesh, desired.x, desired.y, desired.z);
      const dir = new THREE.Vector3().subVectors(target, mesh.position).normalize();
      const velocity = dir.multiplyScalar(cfg.rapidSpeed);
      active.push({mesh,target,velocity,state:'moving',pauseUntil:0,fadeStart:0});
    };

    spawnTimerRef.current = setInterval(spawn, cfg.spawnInterval); spawn();

    let last = performance.now();
    const loop=()=>{
      const now=performance.now(); const dt=(now-last)/1000; last=now;
      for(let i=active.length-1;i>=0;i--){ const w=active[i]; const mesh=w.mesh;
        if(w.state==='moving'){ if(Math.abs(w.target.z-mesh.position.z)<cfg.slowDistance) w.state='slowing'; else mesh.position.add(w.velocity.clone().multiplyScalar(dt)); }
        if(w.state==='slowing'){ mesh.position.lerp(w.target,1-Math.exp(-6*dt)); if(mesh.position.distanceTo(w.target)<1){ mesh.position.copy(w.target); w.state='stopped'; w.pauseUntil=now+cfg.visiblePause; } }
        if(w.state==='stopped'){ if(now>=w.pauseUntil){ w.state='fading'; w.fadeStart=now; } }
        if(w.state==='fading'){ const p=Math.min(1,(now-w.fadeStart)/cfg.fadeDuration); mesh.material.opacity=1-p; if(p>=1){ scene.remove(mesh); if(mesh.material.map) mesh.material.map.dispose(); mesh.geometry.dispose(); mesh.material.dispose(); active.splice(i,1); } }
      }
      renderer.render(scene,camera); animationRef.current=requestAnimationFrame(loop);
    };
    animationRef.current=requestAnimationFrame(loop);

    const onResize=()=>{ const w=mount.clientWidth,h=mount.clientHeight; renderer.setSize(w,h); camera.aspect=w/h; camera.updateProjectionMatrix(); };
    window.addEventListener('resize', onResize);

    return ()=>{
      cancelAnimationFrame(animationRef.current); clearInterval(spawnTimerRef.current); window.removeEventListener('resize',onResize);
      active.forEach(w=>{ scene.remove(w.mesh); if(w.mesh.material.map) w.mesh.material.map.dispose(); w.mesh.geometry.dispose(); w.mesh.material.dispose(); });
      renderer.dispose(); mount.removeChild(renderer.domElement);
    };
  },[]);

  function handleAddWord(wordRaw){
    const word=wordRaw.trim().slice(0,cfg.customMaxChars); if(!word) return;
    setCustomBucket(prev=>{
      if(prev.length<cfg.customMaxSize) return [...prev,word];
      const target=1+(overwriteCounterRef.current%4);
      bucketsRef.current[target]=[...prev]; setBucketsState(bucketsRef.current.map(b=>[...b]));
      overwriteCounterRef.current+=1; return [word];
    });
  }

  function handleInputKeyDown(e){ e.stopPropagation(); if(e.key==='Enter'){ handleAddWord(inputValue); setInputValue(''); } }
  function handleInputChange(e){ setInputValue(e.target.value.slice(0,cfg.customMaxChars)); }
  function stopMouse(e){ e.stopPropagation(); }

  return (
    <div style={{position:'relative',width:'100%',height:'100vh',background:'black'}}>
      <div ref={mountRef} style={{width:'100%',height:'100%'}} />
      <div onMouseDown={stopMouse} style={{position:'absolute',left:12,top:12,zIndex:20,color:'white',fontFamily:'sans-serif'}}>
        <input value={inputValue} onChange={handleInputChange} onKeyDown={handleInputKeyDown}
          placeholder={`Type a word (max ${cfg.customMaxChars} chars) and press Enter`} style={{padding:8,borderRadius:6,border:'1px solid rgba(255,255,255,0.18)',background:'rgba(0,0,0,0.4)',color:'white'}} />
        <div style={{fontSize:12,opacity:0.8,marginTop:6}}>Custom bucket used every {cfg.customEvery}th spawn. Next overwrite: #{1+(overwriteCounterRef.current%4)}</div>
        <div style={{marginTop:6,fontSize:13}}>Custom bucket ({customBucket.length}/{cfg.customMaxSize}): {customBucket.join(', ') || 'empty'}</div>
      </div>
    </div>
  );
}
