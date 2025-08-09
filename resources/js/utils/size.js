import { randFloatSpread } from "../three/src/math/MathUtils.js";



export function randomSize(maxSize = 5) {
    // 
    let size = Math.abs(randFloatSpread(maxSize));
    return size;
}