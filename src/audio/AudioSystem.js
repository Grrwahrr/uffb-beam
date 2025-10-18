import * as Tone from 'tone';

/**
 * Museum-style generative audio system
 * Creates contemplative, pulsating soundscapes that respond to word characteristics
 */
export class AudioSystem {
  constructor(config = {}) {
    this.config = {
      volume: 0.3,
      baseOctave: 4,
      pulseRate: 0.15, // Hz - slow, breathing-like pulse
      ...config,
    };

    this.isInitialized = false;
    this.harmonicIndex = 0;
    this.pulsePhase = 0;
    this.intervals = [];

    // Museum-quality scale: A minor pentatonic for contemplative feel
    this.pentatonicScale = ['A', 'C', 'D', 'E', 'G'];

    // Subtle harmonic intervals instead of full chords
    this.harmonicIntervals = [
      'A2', // Root
      'E3', // Perfect fifth
      'C3', // Minor third
      'G3', // Minor seventh
    ];
  }

  async initialize() {
    if (this.isInitialized) return;

    // Create minimal, crystalline synthesizer - like installation art
    this.synth = new Tone.PolySynth(Tone.Synth, {
      oscillator: {
        type: 'sine',
        partialCount: 2,
        partials: [1, 0.3], // Pure, minimal harmonics
      },
      envelope: {
        attack: 0.8, // Slow, contemplative attack
        decay: 0.1,
        sustain: 0.3, // Gentle sustain
        release: 3.5, // Long, meditative release
      },
    });

    // Museum-grade reverb: spacious, architectural
    this.reverb = new Tone.Reverb({
      decay: 8, // Cathedral-like space
      wet: 0.6, // More reverb for spaciousness
      preDelay: 0.1, // Slight pre-delay for depth
    });

    // Add subtle delay for texture
    this.delay = new Tone.PingPongDelay({
      delayTime: '8n',
      feedback: 0.15,
      wet: 0.2,
    });

    // Pulsating tremolo for breathing effect
    this.tremolo = new Tone.Tremolo({
      frequency: this.config.pulseRate,
      depth: 0.4,
      type: 'sine',
    }).start();

    // Low-frequency oscillator for volume pulsing
    this.pulseLFO = new Tone.LFO({
      frequency: this.config.pulseRate * 0.7, // Slightly slower for depth
      amplitude: 0.3,
      type: 'sine',
    }).start();

    // Minimal background drone - single sustained note
    this.droneSynth = new Tone.Synth({
      oscillator: {
        type: 'sine',
        partialCount: 1, // Pure sine wave
      },
      envelope: {
        attack: 8,
        decay: 0,
        sustain: 1,
        release: 8,
      },
    });

    // Create gain nodes for pulsating control
    this.mainGain = new Tone.Gain(0.6);
    this.droneGain = new Tone.Gain(0.1);

    // Chain effects: synth → tremolo → delay → reverb → mainGain → destination
    this.synth.connect(this.tremolo);
    this.tremolo.connect(this.delay);
    this.delay.connect(this.reverb);
    this.reverb.connect(this.mainGain);
    this.mainGain.toDestination();

    // Drone chain: droneSynth → droneGain → destination
    this.droneSynth.connect(this.droneGain);
    this.droneGain.toDestination();

    // Connect LFO to gain for pulsating effect
    this.pulseLFO.connect(this.mainGain.gain);
    this.pulseLFO.connect(this.droneGain.gain);

    this.isInitialized = true;
  }

  // Simple hash function for consistent word-to-note mapping
  hashWord(word) {
    let hash = 0;
    for (let i = 0; i < word.length; i++) {
      const char = word.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash);
  }

  // Analyze word characteristics for musical parameters
  analyzeWord(word) {
    const vowels = word.match(/[aeiouAEIOU]/g) || [];
    const consonants = word.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g) || [];

    return {
      length: word.length,
      vowelCount: vowels.length,
      consonantCount: consonants.length,
      hash: this.hashWord(word),
    };
  }

  // Convert word to musical note - museum aesthetic
  wordToNote(word) {
    const analysis = this.analyzeWord(word);

    // Select note from contemplative scale
    const noteIndex = analysis.hash % this.pentatonicScale.length;
    const note = this.pentatonicScale[noteIndex];

    // Octave selection for intellectual spacing
    let octave = this.config.baseOctave;
    if (analysis.length <= 4)
      octave += 1; // Delicate, higher register
    else if (analysis.length >= 7) octave -= 1; // Deeper, more grounded

    // Duration: longer, more contemplative
    const baseDuration = 2.0; // Much longer base duration
    const duration = baseDuration + analysis.vowelCount * 0.5;

    // Velocity: softer, more refined
    const baseVelocity = 0.4; // Quieter overall
    const velocity = Math.max(0.15, baseVelocity - analysis.consonantCount * 0.02);

    return {
      note: note + octave,
      duration,
      velocity,
      analysis,
    };
  }

  // Play subtle harmonic interval
  playHarmonic() {
    if (!this.isInitialized || Tone.getContext().state !== 'running') return;

    // Play single harmonic note, not full chord
    this.droneSynth.triggerAttackRelease(this.harmonicIntervals[this.harmonicIndex], '2n');
    this.harmonicIndex = (this.harmonicIndex + 1) % this.harmonicIntervals.length;
  }

  // Play note for a word - museum aesthetic with pulsating
  async playWord(word) {
    if (!this.isInitialized) {
      await this.initialize();
    }

    if (Tone.getContext().state !== 'running') {
      await Tone.start();
    }

    const musical = this.wordToNote(word);

    // Modulate tremolo rate based on word characteristics for organic pulsing
    const pulseVariation = 1 + musical.analysis.vowelCount * 0.1 - musical.analysis.consonantCount * 0.05;
    this.tremolo.frequency.value = this.config.pulseRate * pulseVariation;

    // Set volume more subtly with pulsating consideration
    const baseVolume = Tone.gainToDb(this.config.volume * musical.velocity * 0.6);
    this.synth.volume.value = baseVolume;

    // Play main note with contemplative timing
    this.synth.triggerAttackRelease(musical.note, musical.duration);

    // Rarely add harmonic resonance (8% chance) - more selective
    if (Math.random() < 0.08) {
      const harmonyIndex = (musical.analysis.hash + 3) % this.pentatonicScale.length;
      const harmonyNote = this.pentatonicScale[harmonyIndex] + (this.config.baseOctave - 1);
      setTimeout(() => {
        this.synth.triggerAttackRelease(harmonyNote, musical.duration * 0.7);
      }, 800); // Delayed entrance for sophistication
    }

    // Very occasionally (3% chance) add a subtle high harmonic with pulse sync
    if (Math.random() < 0.03) {
      const highHarmonyIndex = (musical.analysis.hash + 1) % this.pentatonicScale.length;
      const highNote = this.pentatonicScale[highHarmonyIndex] + (this.config.baseOctave + 2);
      setTimeout(() => {
        // Sync with pulse phase for rhythmic coherence
        const pulseSync = Math.sin(this.pulsePhase) * 0.1 + 0.15;
        this.synth.volume.value = Tone.gainToDb(this.config.volume * pulseSync);
        this.synth.triggerAttackRelease(highNote, musical.duration * 0.3);
      }, 1200);
    }

    // Update pulse phase for next interaction
    this.pulsePhase += 0.3;
  }

  // Start background systems
  startBackground(spawnInterval) {
    if (!this.isInitialized) return;

    // Very sparse harmonic intervals (every 12 word spawns ≈ every 8.4 seconds)
    const harmonicInterval = setInterval(() => this.playHarmonic(), spawnInterval * 12);
    this.intervals.push(harmonicInterval);

    // Start with subtle harmonic after delay
    setTimeout(() => this.playHarmonic(), 2000);
  }

  // Update pulse rate dynamically
  setPulseRate(rate) {
    this.config.pulseRate = rate;
    if (this.tremolo) {
      this.tremolo.frequency.value = rate;
    }
    if (this.pulseLFO) {
      this.pulseLFO.frequency.value = rate * 0.7;
    }
  }

  // Set master volume
  setVolume(volume) {
    this.config.volume = volume;
    if (this.mainGain) {
      this.mainGain.gain.value = volume * 0.6;
    }
    if (this.droneGain) {
      this.droneGain.gain.value = volume * 0.1;
    }
  }

  // Cleanup function
  dispose() {
    this.intervals.forEach(interval => clearInterval(interval));
    this.intervals = [];

    if (this.synth) this.synth.dispose();
    if (this.droneSynth) this.droneSynth.dispose();
    if (this.reverb) this.reverb.dispose();
    if (this.delay) this.delay.dispose();
    if (this.tremolo) this.tremolo.dispose();
    if (this.pulseLFO) this.pulseLFO.dispose();
    if (this.mainGain) this.mainGain.dispose();
    if (this.droneGain) this.droneGain.dispose();

    this.isInitialized = false;
  }
}
