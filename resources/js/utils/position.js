import { randFloatSpread } from "../three/src/math/MathUtils.js";



export function randomPosition(floorSize = 10) {
    // 
    let x = randFloatSpread(floorSize);
    let y = randFloatSpread(floorSize);
    let z = randFloatSpread(floorSize);
    return {x , y, z};
}