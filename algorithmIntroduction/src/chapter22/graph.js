function Graph() {
    var vertices = [];
    var addjList = new Map();

    this.addVertex = function (v) {
        vertices.push(v);
        addjList.set(v, []);
    }

    this.addEdge = function (v, w) {
        addjList.get(v).push(w);
        addjList.get(w).push(v);
    }

    this.toString = function () {
        var s = '';
        for (var i = 0; i < vertices.length; i++) {
            s += vertices[i] + ' -> ';
            var neighbors = addjList.get(vertices[i]);
            for (var j = 0; j < neighbors.length; j++) {
                s += neighbors[j] + ' ';
                alert(s);
            }
            s += ' \n';
        }
        return s;
    }
}

var graph = new Graph();
var myVertices = ['a', 'b', 'c', 'd'];
for  (var i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}

graph.addEdge('a', 'b');
graph.addEdge('a', 'c');
graph.addEdge('a', 'd');

console.log(graph.toString());
