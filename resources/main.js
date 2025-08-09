import { initializeScene } from "./js/bootstrap.js";
import { initializeStatsGUI } from "./js/controllers/statistics-controllers.js";
import { initializeOrbitsControls } from "./js/controls/orbitalControls.js";
import { createFloor } from "./js/floor.js";

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
        // 
        const animate = function() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
            statisticsUpdator();
            orbitsControls.update();
        }
        animate();
      })