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
    let graph = document.getElementById("graph");
    graph.innerHTML = "";
    var svg = document.createElement("mainSvg");
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
        var label = scene.label;
        newDiv.setAttribute("id",label);
        newDiv.innerHTML = scene.generateHtml();
        graph.appendChild(newDiv);

        sceneGraph[scene.label] = scene;
        displayLines(scene.label);
        dragElement(document.getElementById(scene.label));
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
        graph.appendChild(newDiv);

        boolGraph[bool.label] = bool;
        displayLines(bool.label);
        dragElement(document.getElementById(bool.label));
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
        console.log("file "+file.name);
    }

    input.click();

/*
            var xmlhttp, xmlDoc;
            xmlhttp = new XMLHttpRequest();
            xmlhttp.open("GET", "note.xml", false);
            xmlhttp.send();
            xmlDoc = xmlhttp.responseXML;
            document.getElementById("to").innerHTML=
            xmlDoc.getElementsByTagName("to")[0].childNodes[0].nodeValue;
            document.getElementById("from").innerHTML=
            xmlDoc.getElementsByTagName("from")[0].childNodes[0].nodeValue;
            document.getElementById("message").innerHTML=
            xmlDoc.getElementsByTagName("body")[0].childNodes[0].nodeValue;
*/

/*
    https://stackoverflow.com/questions/20996242/saving-xml-file-using-javascript
    
    xmlDoc = loadXMLDoc("books.xml");

    x = xmlDoc.documentElement;

    //create a book element, title element and a text node
    newNode = xmlDoc.createElement("book");
    newTitle = xmlDoc.createElement("title");
    newText = xmlDoc.createTextNode("A Notebook");

    //add the text node to the title node,
    newTitle.appendChild(newText);
    //add the title node to the book node
    newNode.appendChild(newTitle);

    y = xmlDoc.getElementsByTagName("book")[1]
    //replace the first book node with the new node
    x.replaceChild(newNode, y);

    z = xmlDoc.getElementsByTagName("title");
    for (i = 0; i < z.length; i++) {
        alert(z[i].childNodes[0].nodeValue);

    }  
*/    
}
