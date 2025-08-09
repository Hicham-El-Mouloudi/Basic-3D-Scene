import Stats from "../three/examples/jsm/libs/stats.module"


export function initializeStatsGUI({mainHTMLElement}){
    // 
    const stats = Stats();
    if(mainHTMLElement?? false){
        mainHTMLElement.appendChild(stats);
    } else {
        document.body.appendChild(stats);
    }
    return () => {
        // 
        stats.update();
    }
}