import * as THREE from "three";
import { randomColor } from "../utils/colors.js";
import { randomPosition } from "../utils/position.js";
import { randomSize } from "../utils/size.js";

export function addCube({parent, material}) {
    // 
    let randomColor = randomColor();
    let randomPosition = randomPosition();
    let randomSize = randomSize();
    let geo = new THREE.BoxGeometry(randomSize, randomSize, randomSize);
    let material = material?? new THREE.MeshStandardMaterial({color : randomColor(), roughness : 0.1, metalness : 0.9});
    let cube = new THREE.Mesh(geo, material);
    cube.position.set(randomPosition.x, randomPosition.y, randomPosition.z)
}

export function removeLastAddedCube({parent}) {
    parent.children.pop();
}