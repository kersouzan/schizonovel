class Scene {
    constructor(label, icone, coordinates, htmlCoordinates, conditions, notes) {
        this.label = label;
        this.icone = icone;
        this.coordinates = coordinates;
        this.htmlCoordinates = htmlCoordinates;
        this.conditions = conditions;
        this.notes = notes;
    }

    saveToXml() {
        var xml = "\t<Scene id=\""+this.label+"\">\n";
        xml += "\t\t<label>"+this.label+"</label>\n";
        xml += "\t\t<icone>"+this.icone+"</icone>\n";
        xml += "\t\t<coordinates>"+this.coordinates+"</coordinates>\n";
        xml += "\t\t<htmlCoordinates>"+this.htmlCoordinates+"</htmlCoordinates>\n";
        xml += "\t\t<conditions>"+this.conditions+"</conditions>\n";
        xml += "\t\t<notes>"+this.notes+"</notes>\n";
        xml += "\t</Scene>\n";
        return xml;
    }

    loadFromXml(xmlElt) {
        var label = "";
        var icone = "";
        var coordinates = "";
        var htmlCoordinates = "";
        var conditions = "";
        var notes = "";
        
        for(let i = 0; i < xmlElt.children.length; i++) {
            if(xmlElt.children[i].childNodes[0] == null) continue;
            if(xmlElt.children[i].nodeName == "label") label = xmlElt.children[i].childNodes[0].nodeValue;
            if(xmlElt.children[i].nodeName == "icone") icone = xmlElt.children[i].childNodes[0].nodeValue;
            if(xmlElt.children[i].nodeName == "coordinates") coordinates = xmlElt.children[i].childNodes[0].nodeValue;
            if(xmlElt.children[i].nodeName == "htmlCoordinates") htmlCoordinates = xmlElt.children[i].childNodes[0].nodeValue;
            if(xmlElt.children[i].nodeName == "conditions") conditions = xmlElt.children[i].childNodes[0].nodeValue;
            if(xmlElt.children[i].nodeName == "notes") notes = xmlElt.children[i].childNodes[0].nodeValue;
        }

        this.label = label;
        this.icone = icone;
        this.coordinates = coordinates;
        this.htmlCoordinates = htmlCoordinates;
        this.conditions = conditions;
        this.notes = notes;        
    }
    
    generateHtml() {
        var htmlCode = "<div class=\"movableheader\" id=\""+this.label+"header\">Déplacer</div>";
        htmlCode += "<div class=\"tooltip\">";
        htmlCode += "<img src=\"../src/Schizonovel/game/images/places/"+this.icone+"\" width=\"50px\" height=\"50px\"/>";
        htmlCode += "<span class=\"tooltiptext\">"+this.notes+"</span>";
        htmlCode += "</div>";
        htmlCode += "<br><button onclick=\"fillForm('"+this.label+"');\">"+this.label+"</button>";
        return htmlCode;
    }
    
    displayLines() {
        // TODO analyse condition.
        var html = "<line x1=\"0\" y1=\"0\" x2=\"300\" y2=\"200\" style=\"stroke:red;stroke-width:2\"/>";
        return html;
    }
}

let sceneGraph = {};

class Bool {
    constructor(parentScene, name, htmlCoordinates) {
        this.parentScene = parentScene;
        this.label = label;
        this.htmlCoordinates = htmlCoordinates;
    }
    
    saveToXml() {
        var xml = "\t<Bool id=\""+this.label+"\">\n";
        xml += "\t\t<label>"+this.label+"</label>\n";
        xml += "\t\t<parentScene>"+this.parentScene+"</parentScene>\n";
        xml += "\t\t<htmlCoordinates>"+this.htmlCoordinates+"</htmlCoordinates>\n";
        xml += "\t</Bool>\n";
        return xml;
    }

    loadFromXml(xmlElt) {
        var label = "";
        var parentScene = "";
        var htmlCoordinates = "";
        
        for(let i = 0; i < xmlElt.children.length; i++) {
            if(xmlElt.children[i].childNodes[0] == null) continue;
            if(xmlElt.children[i].nodeName == "label") label = xmlElt.children[i].childNodes[0].nodeValue;
            if(xmlElt.children[i].nodeName == "parentScene") parentScene = xmlElt.children[i].childNodes[0].nodeValue;
            if(xmlElt.children[i].nodeName == "htmlCoordinates") htmlCoordinates = xmlElt.children[i].childNodes[0].nodeValue;
        }

        this.label = label;
        this.parentScene = parentScene;
        this.htmlCoordinates = htmlCoordinates;
    }

    generateHtml() {
        var htmlCode = "<div class=\"movableheader\" id=\""+this.label+"header\">Déplacer</div>";
        htmlCode += "<br><button onclick=\"fillForm('"+this.label+"');\">"+this.label+"</button>";
        return htmlCode;
    }

    displayLines() {
        // TODO self to parent
        var html = "<line x1=\"0\" y1=\"0\" x2=\"300\" y2=\"200\" style=\"stroke:red;stroke-width:2\"/>";
        return html;
    }
}

let boolGraph = {};
