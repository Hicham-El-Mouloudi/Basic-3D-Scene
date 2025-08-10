import * as THREE from "three";

export function initializeSceneController({gui, scene}) {
    const sceneConfigurator = gui.addFolder("Scene");
    // 
    const sceneConfiguration = {
        background : "white",
        "Toggele Override Material" : false,
        "Toggele Environment" : false
    }

    // defining settings

    // Background
    let backgroundFunctions = {
        white : function() {
            // change background to white
            scene.background = new THREE.Color(0xffffff);
        },
        black : function() {
            // change background to black
            scene.background = new THREE.Color(0x000000);
        }, 
        none : function() {
            // delete background
            scene.background = null;
        }, 
        color : function() {
            // change background to green
            scene.background = new THREE.Color(0x0a9396);
        }, 
        texture : function() {
            // change background to textue
            let textureLoader = new THREE.TextureLoader();
            textureLoader.load("./resources/assets/wall.jpg", (texture) => {
                // 
                scene.background = texture;
            })
        }, 
        cubeMap : function() {
            // change background to textue
            let textureLoader = new THREE.TextureLoader();
            textureLoader.load("./resources/assets/bedroom.jpg", (texture) => {
                // 
                texture.mapping = THREE.EquirectangularReflectionMapping;
                scene.background = texture;
            })
        }
    }
    // 
    let backgroundController = sceneConfigurator.add(sceneConfiguration, "background", ["white", "black", "none", "color", "texture", "cubeMap"]);
    backgroundController.onChange((newValue) => {
        // 
        switch (newValue) {
            case "white":
                backgroundFunctions.white();
                break;
        
            case "black":
                backgroundFunctions.black();
                break;
        
            case "none":
                backgroundFunctions.none();
                break;
        
            case "color":
                backgroundFunctions.color();
                break;
        
            case "texture":
                backgroundFunctions.texture();
                break;
        
            case "cubeMap":
                backgroundFunctions.cubeMap();
                break;
        
        }
    });


}