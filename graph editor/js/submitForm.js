function newScene(F) {
    var icone = document.getElementsByName("icone")[0].value;
    var label = document.getElementsByName("label")[0].value;
    var coordinates = document.getElementsByName("coordinates")[0].value;
    var labelsRegex = document.getElementsByName("labelsRegex")[0].value;
    //var varsRegex = document.getElementsByName("varsRegex")[0].value;
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
    
    let graph = document.getElementById("graph");
    var newDiv = document.createElement("div");
    newDiv.classList.add('scene');
    //var newDiv = document.createDocumentFragment();
    newDiv.setAttribute("id",label);
    newDiv.innerHTML = newDivInnerHTML(label, icone, notes);
    graph.appendChild(newDiv);
    
    // Add to graph structure
    sceneGraph[label] = new Scene(label, icone, coordinates, "0 0", labelsRegex, notes);
    
    // Allow drag
    dragElement(document.getElementById(label));
}

function fillForm(label) {
    var scene = sceneGraph[label];
    if(scene == null) return;
    
    document.getElementsByName("icone")[0].value = scene.icone;
    document.getElementsByName("label")[0].value = scene.label;
    document.getElementsByName("coordinates")[0].value = scene.coordinates;
    document.getElementsByName("labelsRegex")[0].value = scene.regex;
    document.getElementsByName("notes")[0].value = scene.notes;
}

function updateScene(F) {
    // TODO update graph and div from form
    
    var icone = document.getElementsByName("icone")[0].value;
    var label = document.getElementsByName("label")[0].value;
    var coordinates = document.getElementsByName("coordinates")[0].value;
    var regex = document.getElementsByName("labelsRegex")[0].value;
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
    scene.regex = regex;
    scene.notes = notes;
    
    // Update html
    var newDiv = document.getElementById(label);
    newDiv.innerHTML = newDivInnerHTML(label, icone, notes);
}

function removeScene(F) {
    var label = document.getElementsByName("label")[0].value;

    var scene = sceneGraph[label];
    if(scene == null) return;
    
    delete sceneGraph[label];
    
    var htmlDiv = document.getElementById(label).remove();
}
