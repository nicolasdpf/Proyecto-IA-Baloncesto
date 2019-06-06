console.log("Hola Mundo");


let grafoBY = new Graph();

for (let i = 0; i < ataques.length; i++) {
    grafoBY.addVertex(ataques[i]);
    for(let j = 0; j < defensas.length; j++){
        grafoBY.addEdge(ataques[i], defensas[j]);
    }
}
for (let i = 0; i < defensas.length; i++) {
    grafoBY.addVertex(defensas[i]);
}

console.log(grafoBY.dataList[0])

function calculateProbabilities(ataque){
    target = ataque;
}

//calculateProbabilities(grafoBY[])