/**
 * Declaracion de variables iniciales 
 */
let ventanaresultads = document.querySelector(".misresultados");

let botonInicial = document.getElementById("btnIniciar");

let btnAtaque1 = document.getElementById("ataque1");
let btnAtaque2 = document.getElementById("ataque2");
let btnAtaque3 = document.getElementById("ataque3");
let btnAtaque4 = document.getElementById("ataque4");



let seleccionAtaque = document.getElementById("ataqueSeleccionado");
let defensaResult = document.getElementById("defensaResultante");
let porcentajeResult = document.getElementById("PorcentajeResultante");


/**PARA LA TABLA*/
let tablaResultados = document.getElementById("tablaRes");

let def1PD = document.getElementById("d01Pd");
let def2PD = document.getElementById("d02Pd");
let def3PD = document.getElementById("d03Pd");
let def4PD = document.getElementById("d04Pd");

let def1pna = document.getElementById("d01pna");
let def2pna = document.getElementById("d02pna");
let def3pna = document.getElementById("d03pna");
let def4pna = document.getElementById("d04pna");

let def1pa = document.getElementById("d01pa");
let def2pa = document.getElementById("d02pa");
let def3pa = document.getElementById("d03pa");
let def4pa = document.getElementById("d04pa");


let grafoBY = new Graph();

for (let i = 0; i < ataques.length; i++) {
    grafoBY.addVertex(ataques[i].nombre);
    for(let j = 0; j < defensas.length; j++){
        grafoBY.addEdge(ataques[i].nombre, defensas[j].nombre);
    }
}
for (let i = 0; i < defensas.length; i++) {
    grafoBY.addVertex(defensas[i].nombre);
}

function findIndexAtaque(ataque){
    let temp;
    for (let i = 0; i < ataques.length; i++) {
        if(ataque === ataques[i].nombre){
            temp = i;
            continue;
        }        
    }
    return temp;
}
function findIndexDefensa(defensa){
    let temp;
    for (let i = 0; i < defensas.length; i++) {
        if(defensa === defensas[i].nombre){
            temp = i;
            continue;
        }        
    }
    return temp;
}
/**
 * 
 * @param {Graph vertex} ataqueX 
 * @param {Graph vertex} defensaTarget 
 */
function calcularProbCondicinal(ataqueX, defensaTarget){
    let iTarget = findIndexAtaque(ataqueX); ///Ayuda a ubicar el index dentro de la estructura de datos
    let probAtaqueX = ataques[iTarget];//Guarda las probabilidades del ataque X segun cada defensa
    let probDefensaN = [] //Guarda el conjunto de probabilidad total de las defensas en una jugada específica
    let iDTarget = findIndexDefensa(defensaTarget); //Guarda la probabilidad de la defensa target dada la jugada de ataque X
    let deftarget; 
    let pDnA; // Guarda la variable resultante de hallar P(D n A)
    let pA = 0;
    
    //1. Obtener los datos probabilisticos del ataque X segun cada defensa N
    probAtaqueX = probAtaqueX.probabilidades;
    //2. Obtener las probabilidades de seleccionar una defensa en una jugada de ataque X
    defensas.forEach(defensa => {
        probDefensaN.push(defensa.probabilidades[iTarget]);
    });
    
    //3. Definir Probabilidad de defensa target dado un ataque X
    deftarget = defensas[iDTarget].probabilidades[iTarget];

    //4. hallar P( D n A)
    pDnA = deftarget * probAtaqueX[iTarget].v;

    //5. Hallar P(D n A)
    for (let i = 0; i < probDefensaN.length; i++) {
        var temp = probDefensaN[i] * probAtaqueX[i].v;
        pA += temp;
    }

    let resultado = (pDnA / pA) * 100;
    //console.log(resultado.toFixed(2));
    
    def1PD.innerHTML = probDefensaN[0];
    def2PD.innerHTML = probDefensaN[1];
    def3PD.innerHTML = probDefensaN[2];
    def4PD.innerHTML = probDefensaN[3];
    
    def1pna.innerHTML = probAtaqueX[0].f;
    def2pna.innerHTML = probAtaqueX[1].f;
    def3pna.innerHTML = probAtaqueX[2].f;
    def4pna.innerHTML = probAtaqueX[3].f;
    
    def1pa.innerHTML = probAtaqueX[0].v;
    def2pa.innerHTML = probAtaqueX[1].v;
    def3pa.innerHTML = probAtaqueX[2].v;
    def4pa.innerHTML = probAtaqueX[3].v;
    
    
    
    console.log(resultado.toFixed(2));
    return resultado.toFixed(2);
}

calcularProbCondicinal("ataque3", "defensa4");