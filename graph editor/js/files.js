var graphFilename = "graph.xml";

function download(filename, text) {
    var element = document.createElement("a");
    
    element.style.display = 'none';
    element.setAttribute("href", "data:text/plain;charset=utf-8,"+encodeURIComponent(text));
    element.setAttribute("download", filename);
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);    
}

function saveGraph() {
    var content = "<?xml version=\"1.0\"?>\n<graph>\n";
    for(var key in sceneGraph) {
        content += sceneGraph[key].saveToXml();
    }
    for(var key in boolGraph) {
        content += boolGraph[key].saveToXml();
    }
    content += "</graph>\n";
    
    download(graphFilename, content);
}

function parseXML(content) {
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(content,"text/xml");
    
    sceneGraph = {};
    var scenes = xmlDoc.getElementsByTagName("Scene");
    let graphDiv = document.getElementById("graphDiv");
    graphDiv.innerHTML = "";
    var svg = document.getElementById("mainSvg");
    svg.innerHTML = "";
    for(let i = 0; i < scenes.length; i++) {
        var scene = new Scene("", "", "", "", "", "");
        scene.loadFromXml(scenes[i]);
        
        var newDiv = document.createElement("div");
        newDiv.classList.add('scene');
        var htmlCoords = scene.htmlCoordinates.split(" ");
        newDiv.style.top = htmlCoords[0]+"px";
        newDiv.style.left = htmlCoords[1]+"px";
        //var newDiv = document.createDocumentFragment();
        newDiv.setAttribute("id",scene.label);
        newDiv.innerHTML = scene.generateHtml();
        graphDiv.appendChild(newDiv);

        sceneGraph[scene.label] = scene;
        dragElement(document.getElementById(scene.label));
        svg.innerHTML += scene.displayLines();
    }
    
    boolGraph = {};
    var bools = xmlDoc.getElementsByTagName("Bool");
    for(let i = 0; i < bools.length; i++) {
        var bool = new Bool("", "", "");
        bool.loadFromXml(bools[i]);
        
        var newDiv = document.createElement("div");
        newDiv.classList.add("bool");
        var htmlCoords = bool.htmlCoordinates.split(" ");
        newDiv.style.top = htmlCoords[0]+"px";
        newDiv.style.left = htmlCoords[1]+"px";
        //var newDiv = document.createDocumentFragment();
        var label = bool.label;
        newDiv.setAttribute("id",label);
        newDiv.innerHTML = bool.generateHtml();
        graphDiv.appendChild(newDiv);

        boolGraph[bool.label] = bool;
        dragElement(document.getElementById(bool.label));
        svg.innerHTML += bool.displayLines();
    }    
}

function loadGraph() {
    // Select file with dialog box
    var input = document.createElement('input');
    input.type = 'file';
    
    var content = null;

    input.onchange = e => {
        // getting a hold of the file reference
        var file = e.target.files[0]; 

        // setting up the reader
        var reader = new FileReader();
        reader.readAsText(file,'UTF-8');

        // here we tell the reader what to do when it's done reading...
        reader.onload = readerEvent => {
            content = readerEvent.target.result; // this is the content!
            //console.log( content );
            
            parseXML(content);
        }
        graphFilename = file.name;
    }

    input.click();
}
