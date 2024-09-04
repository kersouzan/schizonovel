function displayLines() {
    var svg = document.getElementById("mainSvg");
    svg.innerHTML = "";

    for(var key in sceneGraph) {
        var coords1 = sceneGraph[key].htmlCoordinates.split(" ");
        var parents = sceneGraph[key].conditions.split(" ()&|");
        console.log("parents "+parents);
        for(let i = 0; i < parents.length; i++) {
            console.log("parents[i] "+parents[i]);
            var coords2 = [0,0];
            if(parents[i].startsWith("root")) {
                var x = 0;
                var y = document.documentElement.clientWidth / 2;
                console.log("xy "+x+" "+y);
                coords2 = [x, y];
                console.log("coords 2 "+coords2[0]+" "+coords2[1]);
            }
            if(parents[i].startsWith("scene_")) {
                coords2 = sceneGraph[parents[i]].htmlCoordinates.split(" ");
                console.log("coords 2 "+coords2[0]+" "+coords2[1]);
            }
            svg.innerHTML += "<line x1=\""+(Number(coords1[1])+25)+"\" y1=\""+(Number(coords1[0])+25)+"\" x2=\""+(Number(coords2[1])+25)+"\" y2=\""+(Number(coords2[0])+25)+"\" style=\"stroke:red;stroke-width:2\"/>";
        }
    }
    for(var key in boolGraph) {
        var coords1 = boolGraph[key].htmlCoordinates.split(" ");
        var coords2 = sceneGraph[boolGraph[key].parentScene].htmlCoordinates.split(" ");
        svg.innerHTML += "<line x1=\""+(Number(coords1[1])+25)+"\" y1=\""+(Number(coords1[0])+25)+"\" x2=\""+(Number(coords2[1])+25)+"\" y2=\""+(Number(coords2[0])+25)+"\" style=\"stroke:red;stroke-width:2\"/>";
    }
}
