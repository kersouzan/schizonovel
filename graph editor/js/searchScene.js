function searchScene() {
    var label = document.getElementsByName("search")[0].value;
    
    if(label.startsWith("bool_") && boolGraph[label] != null) {
        var coord = boolGraph[label].htmlCoordinates.split(" ");
        window.scrollTo(coord[1], coord[0]);
        return;
    }
    if(label.startsWith("scene_") && sceneGraph[label] != null) {
        var coord = sceneGraph[label].htmlCoordinates.split(" ");
        window.scrollTo(coord[1], coord[0]);
        return;
    }
    displayConsole("Impossible de trouver ce label.");
}
