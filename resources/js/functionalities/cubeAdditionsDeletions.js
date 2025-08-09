import * as THREE from "three";
import { randomColor } from "../utils/colors.js";
import { randomPosition } from "../utils/position.js";
import { randomSize } from "../utils/size.js";

export function addCube({parent, material}) {
    // 
    let rC = randomColor();
    let rP = randomPosition();
    let rS = randomSize();
    let geo = new THREE.BoxGeometry(rS, rS, rS);
    let materialAffected = material?? new THREE.MeshStandardMaterial({color : rC, roughness : 0.1, metalness : 0.9});
    let cube = new THREE.Mesh(geo, materialAffected);
    cube.position.set(rP.x, rP.y, rP.z)
    // 
    parent.add(cube);
}

export function removeLastAddedCube({parent}) {
    parent.children.pop();
}