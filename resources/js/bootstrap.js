import * as THREE from "three";
import { initializeLights } from "./lights/light.js";
import { initializeOrbitsControls } from "./controls/orbitalControls.js";
import { onResize } from "./utils/util.js";

export function initializeScene({mainHTMLElement, backgroundColor, disableOrbitalControls, disableShadows, directionalLightColor, ambiantLightColor, clearColor, fogColor}){
    const returnFunction = (codeClozeFunction) => {
        // 
        const renderer = new THREE.WebGLRenderer({ antialias : true });
        // 
        const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight,0.1, 100);
        // 
        const scene = new THREE.Scene();
        // 
        initializeLights(scene, {disableShadows, ambiantLightColor, directionalLightColor});
        if(!disableOrbitalControls ?? false) {
            initializeOrbitsControls(camera, renderer);
        }
        onResize(renderer, camera, {mainHTMLElement});
        
        // Renderer
        renderer.setClearColor(clearColor?? 0xffffff, 1);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.VSMShadowMap;
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        if(mainHTMLElement) {
            mainHTMLElement.appendChild(renderer.domElement);
            mainHTMLElement.appendChild(statistics.domElement);
            renderer.setSize(mainHTMLElement.clientWidth, mainHTMLElement.clientHeight);
        }else { 
            document.body.appendChild(renderer.domElement); 
            renderer.setSize(window.innerWidth, window.innerHeight);
        }
        // Scene
        scene.fog = new THREE.Fog(fogColor?? 0xffffff)
        scene.background = new THREE.Color(backgroundColor?? 0xffffff);
    
        // adding components
        scene.add(camera);
        // 

        // executing missing code
        codeClozeFunction({renderer, scene, camera, mainHTMLElement})
    } 
    return returnFunction;
}

