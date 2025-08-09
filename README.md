# Three.js Interactive 3D Scene

An interactive 3D environment built with **Three.js**, designed to showcase real-time rendering, user interaction, and dynamic scene manipulation.  
It features an adjustable floor, orbit navigation, cube management via GUI, and live performance statistics — all running smoothly in your browser.

---


## 📦 Installation & Running

### Prerequisites
Three.js must be served over HTTP/HTTPS — loading via `file://` will not work.  
You’ll need a local server to run this project.

---

### Steps to Run Locally

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Start a local server**:

   **Option 1 – Node.js (http-server)**:
   ```bash
   npx http-server
   ```

   **Option 2 – Python 3**:
   ```bash
   python -m http.server 8000
   ```

3. **Open the app in your browser**:
   - Node.js server: [http://localhost:8080](http://localhost:8080)  
   - Python server: [http://localhost:8000](http://localhost:8000)

---

## 🕹 Usage

- **Navigation** – Click and drag to orbit, scroll to zoom, right-click to pan
- **3D View Settings Panel** – Add or remove cubes dynamically
- **Performance Stats Panel** – Monitor FPS and render performance

---

## 📂 Project Structure

```
project-root/
├── js/
│   ├── bootstrap.js                  # Scene initialization
│   ├── controllers/
│   │   ├── cubesControllers.js       # Cube add/remove GUI controller
│   │   └── statistics-controllers.js # Stats updater
│   ├── controls/
│   │   └── orbitalControls.js        # OrbitControls setup
│   ├── floor.js                      # Floor creation utility
│   └── utils/
│       └── lil-gui.esm.js            # GUI library
└── index.html                        # Main entry point
```
