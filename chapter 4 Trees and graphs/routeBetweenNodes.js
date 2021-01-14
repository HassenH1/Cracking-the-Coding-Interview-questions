//Given a directed graph, design an algo to find out whether there is a route between two nodes

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(node) {
    this.adjacencyList[node] = [];
  }
  addEdge(node1, node2) {
    if (!this.adjacencyList[node1] || !this.adjacencyList[node2]) {
      return "need two valid nodes";
    }
    this.adjacencyList[node1].push(node2);
    // this.adjacencyList[node2].push(node1);
  }
  removeEdge(node1, node2) {
    if (!this.adjacencyList[node1] || !this.adjacencyList[node2]) {
      return "need two valid nodes";
    }
    this.adjacencyList[node1] = this.adjacencyList[node1].filter(
      (node) => node !== node2
    );
    this.adjacencyList[node2] = this.adjacencyList[node2].filter(
      (node) => node !== node1
    );
  }
  removeVertex() {
    //TODO
  }
  routeBetweenNodes(source, target) {
    if (source == target) return true;

    let hash = {};
    let q = [];
    hash[source] = true;

    for (let i = 0; i < this.adjacencyList[source].length; i++) {
      q.push(this.adjacencyList[source][i]);
    }

    while (q.length) {
      let curr = q.shift();
      if (curr == target) return true;

      if (this.adjacencyList[curr.toString()]) {
        if (!hash[curr]) {
          hash[curr] = true;
          for (let i = 0; i < this.adjacencyList[curr].length; i++) {
            q.push(this.adjacencyList[curr][i]);
          }
        }
      }
    }
    return false;
  }
}

let g = new Graph();
g.addVertex(1);
g.addVertex(2);
g.addVertex(3);
g.addVertex(4);
g.addVertex(5);
g.addEdge(1, 2);
g.addEdge(1, 3);
g.addEdge(1, 4);
g.addEdge(2, 4);
g.addEdge(3, 5);
console.log(g.routeBetweenNodes(1, 2));
