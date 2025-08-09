import * as THREE from "three";

export function createFloor({size, color}) {
    // 
    let height, width;
    if(size?? false) {
        width = size.width; height = size.height
    } else {
        width = 1000; height = 1000;
    }
    // creating infinite floor
    const geo = new THREE.PlaneGeometry(width, height);
    const material = new THREE.MeshStandardMaterial();
    material.roughness = 0.5;
    material.metalness = 0.1;
    material.color.set(color?? 0xffffff) ;

    const floor = new THREE.Mesh(geo, material);
    // 
    floor.name = "floor";
    floor.position.y = -5;
    return floor;
}