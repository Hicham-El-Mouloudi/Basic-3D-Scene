import {OrbitControls} from "../three/examples/jsm/controls/OrbitControls.js";


export function initializeOrbitsControls(camera, renderer) {
    const orbitsControls = new OrbitControls(camera, renderer.domElement)
    orbitsControls.enableDamping = true;
    orbitsControls.dampingFactor = 0.05;
    orbitsControls.minDistance = 10;
    orbitsControls.maxDistance = 100;
    orbitsControls.maxPolarAngle = Math.PI / 3;
    orbitsControls.minPolarAngle = Math.PI / 3;
}