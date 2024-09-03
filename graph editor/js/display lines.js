function displayLines(label) {
    // Display lines from this label depending on label regex rules
    if(label.startsWith("scene_")) {
        var svg = document.getElementById("mainSvg");
        svg.innerHTML += sceneGraph[label].displayLines();
    } else if(label.startsWith("bool_")) {
        var svg = document.getElementById("mainSvg");
        svg.innerHTML += sceneGraph[label].displayLines();
    }
}
