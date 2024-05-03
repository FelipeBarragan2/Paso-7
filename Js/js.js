let base_preguntas = readText("base_preguntas.json");
let interprete_bp = JSON.parse(base_preguntas);
let pregunta;
let btn_correspondiente = [

    document.getElementById("btn1"),
    document.getElementById("btn2"),
    document.getElementById("btn3")
]
let preguntaIndex = 0; // Índice para rastrear la posición actual de la pregunta

let mostrarCita1 = true;

function Pregunta_Es(n) {
    pregunta = interprete_bp[n];
    document.getElementById("categoria").innerHTML = pregunta.categoria;
    document.getElementById("pregunta").innerHTML = pregunta.pregunta;
    document.getElementById("titulo_b").innerHTML = pregunta.cita_biblica;
   /* style("btn1").background = "blue";
    style("btn2").background = "blue";
    style("btn3").background = "blue";*/
    style("btn1").display = "none";
    style("btn2").display = "none";
    style("btn3").display = "none";
    style("flecha").display = "block";
    existe_otros()
    style("imagen").objectFit = pregunta.object_fit;
    if (pregunta.imagen) {
        document.getElementById("imagen").setAttribute("src", pregunta.imagen);
        style("imagen").height = "400px";
        style("imagen").width = "100%";

    } else {
        style("imagen").display = "0px";
        style("imagen").width = "0px";
    }
}

function escogerPregunta() {
    if (preguntaIndex < interprete_bp.length) { // Verificar si quedan preguntas por mostrar
        Pregunta_Es(preguntaIndex);
        preguntaIndex++; // Incrementar el índice para la próxima llamada
    } else {
        setTimeout(() => {
             var url = "decision.html";
             window.location.href = url;


        }, 1000);
    }
}

function existe_otros() {
    if (pregunta.cita_biblica2) {
        style("otros").display = "block";
    } else {
        style("otros").display = "none";
    }
}

function otros() {
    if (pregunta.cita_biblica && pregunta.cita_biblica2) {
        if (mostrarCita1) {
            document.getElementById("info_b").innerHTML = pregunta.info_cita;
            document.getElementById("titulo_b").innerHTML = pregunta.cita_biblica;
            mostrarCita1 = false; // Cambia el estado para la próxima vez
        } else {
            document.getElementById("info_b").innerHTML = pregunta.info_cita2;
            document.getElementById("titulo_b").innerHTML = pregunta.cita_biblica2;
            mostrarCita1 = true; // Cambia el estado para la próxima vez
        }
    }
}

function anterior() {
    if (preguntaIndex > 0) { // Verificar si hay preguntas anteriores disponibles
        preguntaIndex--; // Decrementar el índice para ir a la pregunta anterior
        Pregunta_Es(preguntaIndex);
        verificar_pregunta()
        desordenarRespuestas(pregunta)
    }
}

function verificar_pregunta() {
    if (preguntaIndex == 0) { // Verificar si hay preguntas anteriores disponibles
        style("regresar").display = "none";
        // Puedes cambiar esto para ajustarlo a tus necesidades
    } else {
        style("regresar").display = "block";
    }
}

verificar_pregunta()

function mostrar() {
    document.getElementById("info_b").innerHTML = pregunta.info_cita;
    document.getElementById("pregunta2").innerHTML = pregunta.pregunta;
    style("btn1").background = "white";
    style("btn2").background = "white";
    style("btn3").background = "white";
    style("btn1").color = "black";
    style("btn2").color = "black";
    style("btn3").color = "black";
    style("btn1").display = "block";
    style("btn2").display = "block";
    style("btn3").display = "block";
    style("flecha").display = "none";
    desordenarRespuestas(pregunta);
    existe_otros()

}

function esconder() {
    document.getElementById("info_b").innerHTML = "";
    document.getElementById("pregunta2").innerHTML = "";
    style("btn1").background = "blue";
    style("btn2").background = "blue";
    style("btn3").background = "blue";
    style("btn1").color = "blue";
    style("btn2").color = "blue";
    style("btn3").color = "blue";
}


let btns = [
    document.getElementById("btn1").value,
    document.getElementById("btn2").value,
    document.getElementById("btn3").value
];

let arr;


function desordenarRespuestas(pregunta) {

    arr = [
        pregunta.respuesta,
        pregunta.incorecta_1,
        pregunta.incorecta_2
    ];

    arr.sort(() => Math.random() - 0.5);

    document.getElementById("btn1").innerHTML = arr[0];
    document.getElementById("btn2").innerHTML = arr[1];
    document.getElementById("btn3").innerHTML = arr[2];
}

function oprimir_btn(i) {

    if (arr[i] == pregunta.respuesta) {
        btn_correspondiente[i].style.background = "lightgreen"
        setTimeout(() => {
            reiniciar()
            verificar_pregunta()
            esconder()
        }, 500);

    } else {

        btn_correspondiente[i].style.background = "lightcoral"
        setTimeout(() => {
            btn_correspondiente[i].style.background = "white"
        }, 500);

    }
}

function reiniciar() {
    for (const btn of btn_correspondiente) {
        btn.style.background = "white"
    }
    escogerPregunta()
}

escogerPregunta()

function select_id(id) {
    return document.getElementById(id);
}

function style(id) {
    return select_id(id).style;
}

function readText(ruta_local) {
    var texto = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", ruta_local, false);
    xmlhttp.send();
    if (xmlhttp.status == 200) {
        texto = xmlhttp.responseText;
    }
    return texto;
}

function inicio(){
    var url = "index.html";
    window.location.href = url;
}

function reflexion(){
    var url = "reflexion.html";
    window.location.href = url;
}

function felipe(){
    var url = "felipe.html";
    window.location.href = url;
}

function quitar(){
    style("flecha").display = "none";
    style("flecha2").display = "block";

}