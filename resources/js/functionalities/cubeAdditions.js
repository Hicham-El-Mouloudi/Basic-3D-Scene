import * as THREE from "three";
import { randomColor } from "../utils/colors";
import { randomPosition } from "../utils/position";

export function addCube({floorSize}) {
    // 
    let randomColor = randomColor();
    let randomPosition = randomPosition(floorSize);
    let randomSize = randomPosition();
    let geo = new THREE.BoxGeometry()
}