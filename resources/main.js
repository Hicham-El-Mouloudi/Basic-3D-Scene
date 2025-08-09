import { initializeScene } from "./js/bootstrap.js";
import { initializeStatsGUI } from "./js/controllers/statistics-controllers.js";
import { createFloor } from "./js/floor.js";

initializeScene({ mainHTMLElement : document.getElementById("mainContainer"),
     disableOrbitalControls : false,
      disableShadows : false }) (({renderer, scene, camera, mainHTMLElement}) => {
        // the code cloze
        // creating floor
        let size = {width : 20, height : 20};
        scene.add(createFloor(size));
        // Stats
        const statisticsUpdator = initializeStatsGUI({mainHTMLElement})
        // 
        const animate = function() {
            renderer.render(scene, camera);
            statisticsUpdator();
            requestAnimationFrame(animate);
        }
        animate();
      })