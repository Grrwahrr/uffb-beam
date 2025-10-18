# UFFB Beam - Interactive Text Art Installation

An immersive 3D text experience created for the **Ukrainian Film Festival Berlin (UFFB) 2025**. This interactive art installation renders floating words in 3D space, creating a poetic and contemplative environment that reflects themes of conflict, survival, everyday life, and human resilience.

## 🎭 About the Installation

UFFB Beam transforms words into a living, breathing digital space where text moves through three-dimensional depth. Visitors can interact with the installation by contributing their own words, which become part of the ever-evolving narrative landscape.

The installation features four thematic word collections:
- **Conflict and Survival**: fence, border, sky, drone, siren, distance, refuge, broken, gone, safe
- **The Everyday**: university, home, window, elderberry, hand, laundry, morning, neighbor, family, sleep  
- **Presence and Perception**: see, breathe, wait, hold, remember, silence, moment, space, time, near
- **Emotional Undercurrent**: alone, waiting, grief, tenderness, courage, care, loss, return, belong, pause

## ✨ Features

- **3D Text Rendering**: Words float through space using Three.js WebGL rendering
- **Interactive Participation**: Visitors can add their own words (up to 11 characters)
- **Dynamic Movement**: Words travel from distant space toward the viewer, pause, then fade away
- **Customizable Parameters**: Adjustable timing, speeds, and visual effects
- **Responsive Design**: Adapts to different screen sizes and orientations
- **Real-time Animation**: Smooth 60fps rendering with optimized performance

## 🚀 Technical Implementation

Built with modern web technologies:
- **React 19** - Component architecture and state management
- **Three.js** - 3D graphics and WebGL rendering
- **Vite** - Fast development and optimized builds
- **Canvas API** - Dynamic text texture generation

### Key Animation Features
- Words spawn at configurable intervals (default: 700ms)
- Travel from distant Z-position (-7500) to near position (-1050)
- Smooth deceleration as words approach the viewer
- Configurable pause duration (1000ms) for reading
- Gentle fade-out over 600ms

## 🛠 Installation & Setup

```bash
# Clone the repository
git clone [repository-url]
cd uffb-beam

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎮 User Interaction

- **Type words**: Use the input field in the top-left corner
- **Press Enter**: Add your word to the custom bucket
- **Word limits**: Maximum 11 characters per word
- **Custom frequency**: Your words appear every 5th spawn
- **Bucket capacity**: Up to 10 custom words stored at once

## ⚙️ Configuration

The `WordRenderer` component accepts numerous props for customization:

```javascript
<WordRenderer
  visiblePause={1000}      // How long words pause (ms)
  spawnInterval={700}      // Time between new words (ms)
  rapidSpeed={3500}        // Initial movement speed
  fadeDuration={600}       // Fade out duration (ms)
  customEvery={5}          // Frequency of custom words
  // ... and many more
/>
```

## 🎨 Art Direction

The installation creates a meditative space where:
- **Black background** provides infinite depth
- **White text** with subtle black outlines ensures readability
- **Organic movement** mimics natural flow and breathing
- **Temporal pacing** allows for contemplation and reflection

## 🇺🇦 Cultural Context

Created for the Ukrainian Film Festival Berlin 2025, this installation serves as a digital space for reflection on themes central to contemporary Ukrainian experience - from the mundane beauty of daily life to the profound challenges of displacement and resilience.

## 📱 Browser Compatibility

- Modern browsers with WebGL support
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile devices supported
- Optimized for both desktop and touch interfaces

## 🤝 Contributing

This is an art installation project. For technical issues or enhancement suggestions, please open an issue or submit a pull request.

## 📄 License

Created for the Ukrainian Film Festival Berlin 2025. Please respect the artistic and cultural context of this work.

---

*Experience the installation live at UFFB 2025 or run it locally to explore the intersection of technology, language, and human experience.*