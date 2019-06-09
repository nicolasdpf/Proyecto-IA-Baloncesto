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

    //console.log(probAtaqueX);
    let resultado = (pDnA / pA) * 100;
    console.log(resultado.toFixed(2));
    return resultado.toFixed(2);
}

calcularProbCondicinal("ataque1", "defensa4");