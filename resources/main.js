import { initializeScene } from "./js/bootstrap.js";
import { createFloor } from "./js/floor.js";

initializeScene({ mainHTMLElement : document.getElementById("mainContainer"),
     disableOrbitalControls : false,
      disableShadows : false }) (({renderer, scene, camera, mainHTMLElement}) => {
        // the code cloze
        // creating floor
        let size = {width : 20, height : 20};
        scene.add(createFloor(size));
        // 
        const animate = function() {
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }
        animate();
      })