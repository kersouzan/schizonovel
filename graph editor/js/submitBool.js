var oldBoolLabel = "";

function newBool() {
    var parents = document.getElementsByName("boolParent")[0].value;
    var label = document.getElementsByName("boolName")[0].value;

    // Returns if scene already exists
    if(boolGraph[label] != null) {
        displayConsole("Le booléen existe deja.");
        return;
    }
    
    if(!label.startsWith("bool_")) {
        displayConsole("Le nom du booléen doit commencer par 'bool_'.");
        return;
    }
    
    console.log("bool "+parents+" "+label);
    var bool = new Bool(parents, label, "0 0");
    let graphDiv = document.getElementById("graphDiv");
    graphDiv.insertAdjacentHTML('beforeend', bool.generateHtml());

    oldBoolLabel = label;
    
    // Add to graph structure
    boolGraph[label] = bool;
    
    // Allow drag
    dragElement(document.getElementById(label));
    
    displayLines();
}

function fillBoolForm(label) {
    var bool = boolGraph[label];
    if(bool == null) return;
    
    document.getElementsByName("boolParent")[0].value = bool.parentScene;
    document.getElementsByName("boolName")[0].value = bool.label;

    oldBoolLabel = label;
}

function updateBool() {
    var parentScene = document.getElementsByName("boolParent")[0].value;
    var label = document.getElementsByName("boolName")[0].value;
    
    if(oldBoolLabel != label) {
        if(boolGraph[label] != null) {
            displayConsole("Le nouveau nom du label existe déjà");
            return;
        }
        boolGraph[label] = boolGraph[oldBoolLabel];
        delete boolGraph[oldBoolLabel];
    }
    var bool = boolGraph[label];
    
    // Update in javascript graph
    bool.parentScene = parentScene;
    bool.label = label;
    
    // Update html
    document.getElementById(oldBoolLabel).remove();
    let graphDiv = document.getElementById("graphDiv");
    graphDiv.insertAdjacentHTML('beforeend', bool.generateHtml());

    dragElement(document.getElementById(label));
    
    displayLines();

    oldBoolLabel = label;
}

function removeBool() {
    var label = document.getElementsByName("boolName")[0].value;

    var bool = boolGraph[label];
    if(bool == null) return;
    
    delete boolGraph[label];
    
    var htmlDiv = document.getElementById(label).remove();

    displayLines();
}
