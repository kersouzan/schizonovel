function newScene() {
    var icone = document.getElementsByName("icone")[0].value;
    var label = document.getElementsByName("label")[0].value;
    var coordinates = document.getElementsByName("coordinates")[0].value;
    var conditions = document.getElementsByName("conditions")[0].value;
    var notes = document.getElementsByName("notes")[0].value;

    // Returns if scene already exists
    if(sceneGraph[label] != null) {
        displayConsole("La scene existe deja.");
        return;
    }
    
    if(!label.startsWith("scene_")) {
        displayConsole("Le nom de la scene doit commencer par 'scene_'.");
        return;
    }
    
    var scene = new Scene(label, icone, coordinates, "0 0", conditions, notes);
    let graphDiv = document.getElementById("graphDiv");
    graphDiv.insertAdjacentHTML('beforeend', scene.generateHtml());

    
    // Add to graph structure
    sceneGraph[label] = scene;
    
    // Add lines
    var svg = document.getElementById("mainSvg");
    svg.innerHTML += scene.displayLines();
    
    // Allow drag
    dragElement(document.getElementById(label));
    
    displayLines();
}

function fillForm(label) {
    var scene = sceneGraph[label];
    if(scene == null) return;
    
    document.getElementsByName("icone")[0].value = scene.icone;
    document.getElementsByName("label")[0].value = scene.label;
    document.getElementsByName("coordinates")[0].value = scene.coordinates;
    document.getElementsByName("conditions")[0].value = scene.conditions;
    document.getElementsByName("notes")[0].value = scene.notes;
}

function updateScene() {
    var icone = document.getElementsByName("icone")[0].value;
    var label = document.getElementsByName("label")[0].value;
    var coordinates = document.getElementsByName("coordinates")[0].value;
    var conditions = document.getElementsByName("conditions")[0].value;
    var notes = document.getElementsByName("notes")[0].value;
    
    var scene = sceneGraph[label];
    if(scene == null) {
        displayConsole("Impossible de changer le nom d'une scene pour l'instant. Recréez une nouvelle scène.");
        return;        
    }
    
    // Update in javascript graph
    scene.label = label;
    scene.icone = icone;
    scene.coordinates = coordinates;
    scene.conditions = conditions;
    scene.notes = notes;
    
    // Update html
    var newDiv = document.getElementById(label);
    newDiv.innerHTML = scene.generateHtml();
    displayLines(scene.label);
    dragElement(document.getElementById(label));
    
    displayLines();
}

function removeScene() {
    var label = document.getElementsByName("label")[0].value;

    var scene = sceneGraph[label];
    if(scene == null) return;
    
    delete sceneGraph[label];
    
    var htmlDiv = document.getElementById(label).remove();
}
