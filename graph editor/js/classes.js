function encodeXml(unsafe) {
    return unsafe.replace(/[<>&'"]/g, function (c) {
        switch (c) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case '\'': return '&apos;';
            case '"': return '&quot;';
        }
    });
}

function decodeXml(safe) {
    safe.replace('&lt;', '<');
    safe.replace('&gt;', '>');
    safe.replace('&amp;', '&');
    safe.replace('&apos;', '\'');
    safe.replace('&quot;', '"');
    return safe;
}

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
        xml += "\t\t<conditions>"+encodeXml(this.conditions)+"</conditions>\n";
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
            if(xmlElt.children[i].nodeName == "conditions") conditions = decodeXml(xmlElt.children[i].childNodes[0].nodeValue);
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
        var htmlCoords = this.htmlCoordinates.split(" ");
        var htmlCode = "<div class=\"scene\" id=\""+this.label+"\" style=\"top: "+htmlCoords[0]+"px; left: "+htmlCoords[1]+"px;\">";
        htmlCode += "<div class=\"movableheader\" id=\""+this.label+"header\">Déplacer</div>";
        htmlCode += "<div class=\"tooltip\">";
        htmlCode += "<img src=\"../src/Schizonovel/game/images/places/"+this.icone+"\" width=\"75px\" height=\"75px\"/>";
        htmlCode += "<span class=\"tooltiptext\">"+this.notes+"</span>";
        htmlCode += "</div>";
        htmlCode += "<br><button onclick=\"fillSceneForm('"+this.label+"');\">"+this.label+"</button>";
        htmlCode += "</div>";
        return htmlCode;
    }
}

let sceneGraph = {};

class Bool {
    constructor(parentScene, label, htmlCoordinates) {
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
        var htmlCoords = this.htmlCoordinates.split(" ");
        var htmlCode = "<div class=\"bool\" id=\""+this.label+"\" style=\"top: "+htmlCoords[0]+"px; left: "+htmlCoords[1]+"px;\">";
        htmlCode += "<div class=\"movableheader\" id=\""+this.label+"header\">Déplacer</div>";
        htmlCode += "<br><button onclick=\"fillBoolForm('"+this.label+"');\">"+this.label+"</button>";
        htmlCode += "</div>";
        return htmlCode;
    }
}

let boolGraph = {};
