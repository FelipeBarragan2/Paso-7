function inicio(){
    var url = "index.html";
    window.location.href = url;
}

function salir() {
    var url = 'https://www.google.com';
    window.location.href = url
}

function felipe(){
    var url = "felipe.html";
    window.location.href = url;
}

function descargar(){
    var url = "certificado.html";
    window.location.href = url;
}


var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

function alternarVideo() {
    var video = document.getElementById("my-video");
    var boton = document.getElementById("toggle-button");
    var flecha = document.getElementById("flecha");
    if (video.style.display === "none") {
        video.style.display = "block";
        boton.style.display = "none";
        video.play();
        flecha.style.display = "none";
    } else {
        video.style.display = "none";
        boton.style.display = "block";
        video.pause();
        flecha.style.display = "block";
    }
}

function mostrarBoton() {
    var video = document.getElementById("my-video");
    var boton = document.getElementById("toggle-button");
    video.style.display = "none";
    boton.style.display = "block";
    flecha.style.display = "block";
}      