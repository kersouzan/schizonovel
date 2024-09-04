function searchScene() {
    var label = document.getElementsByName("search")[0].value;
    
    if(label.startsWith("bool_") && boolGraph[label] != null) {
        var coord = boolGraph[label].htmlCoordinates.split(" ")[0];
        window.scrollTo(0, coord);
        return;
    }
    if(label.startsWith("scene_") && sceneGraph[label] != null) {
        var coord = sceneGraph[label].htmlCoordinates.split(" ")[0];
        window.scrollTo(0, coord);
        return;
    }
    displayConsole("Impossible de trouver ce label.");
}
