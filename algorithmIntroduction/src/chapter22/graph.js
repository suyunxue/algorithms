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
            }
            s += ' \n';
        }
        return s;
    }


    var initializeColor = function () {
        var color = [];
        for (var i = 0; i < vertices.length; i++) {
            color[vertices[i]] = 'white';
        }
    
        return color;
    };

    this.bfs = function (v, callback) {
        
        var color = initializeColor();
        var queue = [];
        queue.push(v);

        while (queue.length) {
            var u = queue.shift();
            neighbors = addjList.get(u);
            color[u] = 'grey';
            for (var i = 0; i < neighbors.length; i++) {
                var w = neighbors[i];
                if (color[w] === 'white') {
                    color[w] = 'grey';
                    queue.push(w);
                }
            }
            color[u] = 'black';
            if (callback) {
                callback(u);
            }
        }
    }
}


function printNode(value) {
    console.log('Visited vertex: ' + value);
}

var graph = new Graph();
var myVertices = ['a', 'b', 'c', 'd'];
for  (var i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}

graph.addEdge('a', 'b');
graph.addEdge('a', 'c');
graph.addEdge('a', 'd');

graph.bfs(myVertices[0], printNode);

console.log(graph.toString());
