import Stats from "../three/examples/jsm/libs/stats.module.js"


export function initializeStatsGUI({mainHTMLElement}){
    // 
    const stats = Stats();
    if(mainHTMLElement?? false){
        mainHTMLElement.appendChild(stats.domElement);
    } else {
        document.body.appendChild(stats);
    }
    return () => {
        // 
        stats.update();
    }
}