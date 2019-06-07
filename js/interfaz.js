/**
 * Declaracion de variables iniciales 
 */


let botonInicial = document.getElementById("btnIniciar");

let btnAtaque1 = document.getElementById("ataque1");
let btnAtaque2 = document.getElementById("ataque2");
let btnAtaque3 = document.getElementById("ataque3");
let btnAtaque4 = document.getElementById("ataque4");

let seleccionAtaque = document.getElementById("ataqueSeleccionado");




/**
 * Declaracion de Event Listeners
 */
btnAtaque1.addEventListener("click", ejecutarAtq1);
btnAtaque2.addEventListener("click", ejecutarAtq2);
btnAtaque3.addEventListener("click", ejecutarAtq3);
btnAtaque4.addEventListener("click", ejecutarAtq4);



/**
 * Funciones
 */
function ejecutarAtq1(){
    madeProcess("ataque1");
}

function ejecutarAtq2(){
    madeProcess("ataque2");
}

function ejecutarAtq3(){
    madeProcess("ataque3");
}

function ejecutarAtq4(){
    madeProcess("ataque4");
}


function madeProcess(ataque){

    let def1 = calcularProbCondicinal(ataque, "defensa1");
    let def2 = calcularProbCondicinal(ataque, "defensa2");
    let def3 = calcularProbCondicinal(ataque, "defensa3");
    let def4 = calcularProbCondicinal(ataque, "defensa4");

    
    console.log(def1);
    console.log(def2);
    console.log(def3);
    console.log(def4);
}