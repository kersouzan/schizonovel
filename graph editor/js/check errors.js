function displayConsole(message) {
    document.getElementById("console").innerHTML = message;
    
    setTimeout(() => {
        document.getElementById("console").innerHTML = "";
    }, "2000");
}

function checkErrors() {
    alert("check errors !");
}
