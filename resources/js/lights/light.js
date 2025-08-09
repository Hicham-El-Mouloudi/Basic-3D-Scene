import * as THREE from "three";

export function initializeLights(scene, {disableLightShadows, ambiantLightColor, directionalLightColor}){
    // 
    const ambiantLight = new THREE.AmbientLight(ambiantLightColor??0x666666);
    ambiantLight.intensity = 18;
    const directionalLight = new THREE.DirectionalLight(directionalLightColor??0xffffff);
    directionalLight.position.set(5, 12, 8);

    if (!disableLightShadows ?? false) {
        directionalLight.castShadow = true;
    }
    directionalLight.intensity = 1
    directionalLight.shadow.camera.near = 0.1
    directionalLight.shadow.camera.far = 200
    directionalLight.shadow.camera.right = 10
    directionalLight.shadow.camera.left = -10
    directionalLight.shadow.camera.top = 10
    directionalLight.shadow.camera.bottom = -10
    directionalLight.shadow.mapSize.width = 2048
    directionalLight.shadow.mapSize.height = 2048
    directionalLight.shadow.radius = 4
    directionalLight.shadow.bias = -0.00005
    scene.add(ambiantLight);
    scene.add(directionalLight);
    return scene;
}