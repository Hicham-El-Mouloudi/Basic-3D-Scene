import * as THREE from "three";

export function initializeLights(scene, {disableLightShadows, ambiantLightColor, directionalLightColor}){
    // 
    const ambiantLight = new THREE.AmbientLight(ambiantLightColor??0xffffff, 5);
    const directionalLight = new THREE.DirectionalLight(directionalLightColor??0xffffff, 5);
    directionalLight.position.set(new THREE.Vector3(-1,-1, 0));
    if (!disableLightShadows ?? false) {
        ambiantLight.castShadow = true;
        directionalLight.castShadow = true;
    }
    scene.add(ambiantLight);
    scene.add(directionalLight);
    return scene;
}