import {OrbitControls} from "../three/examples/jsm/controls/OrbitControls.js";


export function initializeOrbitsControls(camera, renderer) {
    const orbitsControls = new OrbitControls(camera, renderer.domElement)
    orbitsControls.enableDamping = true;
    orbitsControls.dampingFactor = 0.05;
    orbitsControls.minDistance = 1;
    orbitsControls.maxDistance = 50;
    orbitsControls.minPolarAngle = Math.PI / 4;
    orbitsControls.maxPolarAngle = (3 * Math.PI) / 4;

    return orbitsControls;
}