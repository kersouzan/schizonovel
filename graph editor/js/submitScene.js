var oldSceneLabel = "";

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

    oldSceneLabel = label;
    
    // Add to graph structure
    sceneGraph[label] = scene;
    
    // Allow drag
    dragElement(document.getElementById(label));
    
    displayLines();
}

function fillSceneForm(label) {
    var scene = sceneGraph[label];
    if(scene == null) return;
    
    document.getElementsByName("icone")[0].value = scene.icone;
    document.getElementsByName("label")[0].value = scene.label;
    document.getElementsByName("coordinates")[0].value = scene.coordinates;
    document.getElementsByName("conditions")[0].value = scene.conditions;
    document.getElementsByName("notes")[0].value = scene.notes;
    
    oldSceneLabel = label;
}

function updateScene() {
    var icone = document.getElementsByName("icone")[0].value;
    var label = document.getElementsByName("label")[0].value;
    var coordinates = document.getElementsByName("coordinates")[0].value;
    var conditions = document.getElementsByName("conditions")[0].value;
    var notes = document.getElementsByName("notes")[0].value;
    
    if(oldSceneLabel != label) {
        if(sceneGraph[label] != null) {
            displayConsole("Le nouveau nom du label existe déjà");
            return;
        }
        sceneGraph[label] = sceneGraph[oldSceneLabel];
        delete sceneGraph[oldSceneLabel];
    }
    var scene = sceneGraph[label];
    
    // Update in javascript graph
    scene.label = label;
    scene.icone = icone;
    scene.coordinates = coordinates;
    scene.conditions = conditions;
    scene.notes = notes;
    
    console.log("old "+oldSceneLabel);
    
    // Update html
    document.getElementById(oldSceneLabel).remove();
    let graphDiv = document.getElementById("graphDiv");
    graphDiv.insertAdjacentHTML('beforeend', scene.generateHtml());

    dragElement(document.getElementById(label));
    
    displayLines();

    oldSceneLabel = label;
}

function removeScene() {
    var label = document.getElementsByName("label")[0].value;

    var scene = sceneGraph[label];
    if(scene == null) return;
    
    delete sceneGraph[label];
    
    var htmlDiv = document.getElementById(label).remove();

    displayLines();
}
