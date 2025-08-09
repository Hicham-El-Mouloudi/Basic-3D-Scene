import { randFloatSpread } from "three/src/math/MathUtils.js";


export function randomColor() {
    let color = Math.abs(randFloatSpread(0.33554432))* (10**8)
    return color;
}