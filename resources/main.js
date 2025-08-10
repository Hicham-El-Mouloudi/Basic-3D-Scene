import { initializeScene } from "./js/bootstrap.js";
import { initializeCubeController } from "./js/controllers/cubesControllers.js";
import { initializeSceneController } from "./js/controllers/sceneControllers.js";
import { initializeStatsGUI } from "./js/controllers/statistics-controllers.js";
import { initializeOrbitsControls } from "./js/controls/orbitalControls.js";
import { createFloor } from "./js/floor.js";
import {GUI} from "./js/utils/lil-gui.esm.js";

initializeScene({ mainHTMLElement : document.getElementById("mainContainer"),
     disableOrbitalControls : false,
      disableShadows : false }) (({renderer, scene, camera, mainHTMLElement, orbitsControls}) => {
        // the code cloze
        // Adding Orbital Controls
        initializeOrbitsControls(camera, renderer);
        // creating floor
        let size = 10;
        scene.add(createFloor({size}));
        // Stats
        const statisticsUpdator = initializeStatsGUI({mainHTMLElement})
        // 3D Controls GUI
        const gui = new GUI({ title : "3D View Settings" })
        initializeCubeController({gui, scene}); // for cube addition/deletion
        initializeSceneController({gui, scene}); // initializing the scene controller
        // 
        const animate = function() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
            statisticsUpdator();
            orbitsControls.update();
        }
        animate();
      })