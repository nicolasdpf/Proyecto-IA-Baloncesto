console.log("Hola Mundo");


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



console.log(grafoBY);

function findIndex(ataque){
    let temp;
    for (let i = 0; i < ataques.length; i++) {
        if(ataque === ataques[i].nombre){
            temp = i;
            continue;
        }        
    }
    return temp;
}

function calculateProbabilities(ataque){
    let iTarget = findIndex(ataque);
    let target = ataques[iTarget];
    
    console.log(target)
}

calculateProbabilities("ataque1")