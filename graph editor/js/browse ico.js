function browseIcone() {
    var input = document.createElement('input');
    input.type = 'file';
    
    var content = null;

    input.onchange = e => {
        // getting a hold of the file reference
        var file = e.target.files[0]; 

        document.getElementById("icone").value = file.name;
    }

    input.click();
}
