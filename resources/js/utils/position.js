import { randFloatSpread } from "three/src/math/MathUtils.js";



export function randomPosition(floorSize) {
    // 
    let x = randFloatSpread(floorSize);
    let y = randFloatSpread(floorSize);
    return {x , y};
}