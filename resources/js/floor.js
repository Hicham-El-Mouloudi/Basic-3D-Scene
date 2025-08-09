import * as THREE from "three";

export function createFloor({size, color}) {
    // 
    let theSize = size?? 1000;
    // creating infinite floor
    const geo = new THREE.BoxGeometry(theSize, theSize, 0.5);
    const material = new THREE.MeshStandardMaterial();
    material.roughness = 0.5;
    material.metalness = 0.1;
    material.color.set(color?? 0xffffff) ;

    const floor = new THREE.Mesh(geo, material);
    // 
    floor.name = "floor";
    floor.receiveShadow = true;
    floor.rotation.x = - Math.PI / 2;
    floor.position.y = -5;
    return floor;
}