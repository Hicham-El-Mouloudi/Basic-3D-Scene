import { addCube, removeLastAddedCube } from "../functionalities/cubeAdditionsDeletions.js";


export function initializeCubeController({gui, scene}) {
    let cubeControls = {
        addingCube : addCube.bind(null, {parent : scene}),
        deleteLastAddedItem : removeLastAddedCube.bind(null, {parent : scene})
    }
    // 
    gui.add(cubeControls, "addingCube");
    gui.add(cubeControls, "deleteLastAddedItem");
}