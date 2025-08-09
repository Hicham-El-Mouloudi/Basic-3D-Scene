
export function onResize(rederer, camera, {mainHTMLElement}) {

    const onResizeEvent = () => {
        // Gettin dims
        let height , width;
        if(!mainHTMLElement ?? false) {
            height = mainHTMLElement.clientHeight;
            width = mainHTMLElement.clientWidth;
        } else {
            height = window.innerHeight; width = window.innerWidth;
        }
        // 
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        rederer.setSize(width, height);
    }
    window.addEventListener("resize",onResizeEvent );
}