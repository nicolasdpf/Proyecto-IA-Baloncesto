/*jshint esversion:6*/
class Graph {
    constructor(){
        this.dataList = {}
    }

    addVertex(vertex){
        if(!this.dataList[vertex]){
            this.dataList[vertex] = [];
        }
    }

    addEdge(v1, v2){
        this.dataList[v1].push(v2)
        //this.dataList[v2].push(v1)
    }

    removeEdge(vertex1, vertex2)
    {
        this.dataList[vertex1] = this.dataList[vertex1].filter(
            v => v !== vertex2
        )
        this.dataList[vertex2] = this.dataList[vertex2].filter(
            v => v !== vertex1
        )
    }

    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }

    
}
