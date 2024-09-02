class Scene {
    constructor(label, icone, coordinates, htmlCoordinates, regex, notes) {
        this.label = label;
        this.icone = icone;
        this.coordinates = coordinates;
        this.htmlCoordinates = htmlCoordinates;
        this.regex = regex;
        //this.varRegex = varRegex;
        this.notes = notes;
    }

    saveToXml() {
        var xml = "\t<Scene id=\""+this.label+"\">\n";
        xml += "\t\t<label>"+this.label+"</label>\n";
        xml += "\t\t<icone>"+this.icone+"</icone>\n";
        xml += "\t\t<coordinates>"+this.coordinates+"</coordinates>\n";
        xml += "\t\t<htmlCoordinates>"+this.htmlCoordinates+"</htmlCoordinates>\n";
        xml += "\t\t<regex>"+this.regex+"</regex>\n";
        xml += "\t\t<notes>"+this.notes+"</notes>\n";
        xml += "\t</Scene>\n";

        return xml;
    }

    loadFromXml(xmlElt) {
        var label = "";
        var icone = "";
        var coordinates = "";
        var htmlCoordinates = "";
        var regex = "";
        var notes = "";
        
        for(let i = 0; i < xmlElt.children.length; i++) {
            if(xmlElt.children[i].nodeName == "label") label = xmlElt.children[i].childNodes[0].nodeValue;
            if(xmlElt.children[i].nodeName == "icone") icone = xmlElt.children[i].childNodes[0].nodeValue;
            if(xmlElt.children[i].nodeName == "coordinates") coordinates = xmlElt.children[i].childNodes[0].nodeValue;
            if(xmlElt.children[i].nodeName == "htmlCoordinates") htmlCoordinates = xmlElt.children[i].childNodes[0].nodeValue;
            if(xmlElt.children[i].nodeName == "regex") regex = xmlElt.children[i].childNodes[0].nodeValue;
            if(xmlElt.children[i].nodeName == "notes") notes = xmlElt.children[i].childNodes[0].nodeValue;
        }

        this.label = label;
        this.icone = icone;
        this.coordinates = coordinates;
        this.htmlCoordinates = htmlCoordinates;
        this.regex = regex;
        this.notes = notes;        
    }
}

let sceneGraph = {};

/*
for(var key in graph) {
  var value = graph[key];

  // do something with "key" and "value" variables
}
*/
