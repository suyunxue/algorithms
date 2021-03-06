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

    this.BFS = function (v) {

        var color = initializeColor();
        var queue = [];
        var d = [];
        var pred = [];
        queue.push(v);

        for (var i = 0; i < vertices.length; i++) {
            d[vertices[i]] = 0;
            pred[vertices[i]] = null;
        }

        while (queue.length) {
            var u = queue.shift();
            var neighbors = addjList.get(u);
            color[u] = 'grey';
            for (i = 0; i < neighbors.length; i++) {
                var w = neighbors[i];
                if (color[w].color === 'white') {
                    color[w] = 'grey';
                    d[w] = d[u] + 1;
                    pred[w] = u;
                    queue.push(w);
                }   
            }
            color[u] = 'black';
        }

        return {
            distances: d,
            predecessors: pred
        }
    }

    this.dfs = function (callback) {
        var color = initializeColor();
        for (var i = 0; i < vertices.length; i++) {
            if (color[vertices[i]] === 'white') {
                dfsVisit(vertices[i], color, callback);
            }
        }
    }

    var dfsVisit = function (u, color, callback) {
        color[u] = 'grey';
        if (callback) {
            callback(u);
        }

        var neighbors = addjList.get(u);
        for (var i = 0; i < neighbors.length; i++) {
            var w = neighbors[i];
            if (color[w] === 'white') {
                dfsVisit(w, color, callback);
            }
        }

        color[u] = 'black';
    }

    var time = 0;
    this.DFS = function() {
        var color = initializeColor();
        var d = [];
        var f = [];
        var p = [];
        var time = [];

        for (var i = 0; i < vertices.length; i++) {
            f[vertices[i]] = 0;
            d[vertices[i]] = 0;
            p[vertices[i]] = null;
        }

        for (var i = 0; i < vertices.length; i++) {
            if (color[vertices[i]] === 'white') {
                DFSVisit(vertices[i], color, d, f, p);
            }
        }

        return {
            discovery: d,
            finished: f,
            predecessors: p
        };
    };

    var DFSVisit = function (u, color, d, f, p) {
        console.log('discovered ' + u);
        color[u] = 'grey';
        d[u] = ++time;
        var neighbors = addjList.get(u);
        for (var i = 0; i < neighbors.length; i++) {
            var w = neighbors[i];
            if (color[w] === 'white') {
                p[w] = u;
                DFSVisit(w, color, d, f, p);
            }
        }
        color[u] = 'black';
        f[u] = ++time;
        console.log('explored ' + u);
    }

    this.dijkstra = function (src) {
        var dist = [];
        var visited = [];
        var length = this.graph.length;

        for (var i = 0; i < length; i++) {
            dist[i] = Infinity;
            visited[src] = 0;
        }
        dist[src] = 0;

        for (var i = 0; i < length - 1; i++) {
            var u = minDistance(dist, visited);
            visited[u] = true;

            for (var v = 0; v < length; v++) {
                if (!visited[v] &&
                    this.graph[u][v] != 0 && dist[u] != Infinity 
                    && dist[u] + this.graph[u][v] < dist[v]) {
                        dist[v] = dist[u] + this.graph[u][v];
                    }
            }
        }
        return dist;
    }

    var minDistance = function (dist, visited) {
        var min = Infinity;
        var minIndex = -1;

        for (var v = 0; v < dist.length; v++) {
            if (visited[v] == false && dist[v] <= min) {
                min = dist[v];
                minIndex = v;
            }
        }

        return minIndex;
    }

    this.floydWarshall = function () {
        var dist = [];
        var length = this.graph.length;
        var i;
        var j;
        var k;

        for (i = 0; i < length; i++) {
            dist[i] = [];
            for (j = 0; j < length; j++) {
                dist[i][j] = this.graph[i][j];
            }
        }

        for (k = 0; k < length; k++) {
            for (i = 0; i < length; i++) {
                for (j = 0; j < length; j++) {
                    if (dist[i][k] + dist[k][j] < dist[i][j]) {
                        dist[i][j] = dist[i][k] + dist[k][j];
                    }
                }
            }
        }

        return dist;
    }

    this.prim = function () {
        var parent = [];
        var key = [];
        var visited = [];
        var length = this.graph.length;
        var i;

        for (var i = 0; i < length; i++) {
            key[i] = Infinity;
            visited[i] = false;
        }

        key[0] = 0;
        parent[0] = -1;

        for (i = 0; i < length - 1; i++) {
            var u = minKey(key, visited);
            visited[u] = true;

            for (var v = 0; v < length; v++) {
                if (this.graph[u][v] && visited[v] == false
                    && this.graph[u][v] < key[v]) {
                        parent[v] = u;
                        key[v] = this.graph[u][v];
                }
            }
        }

        return parent;
    }

    this.kruskal = function () {
        var length = this.graph.length;
        var parent = [];
        var cost;
        var ne = 0, a, b, u, v, i, j, min;
        cost = initializeCost();

        while (ne < length - 1) {
            for (i = 0, min = Infinity; i < length; i++) {
                for (j = 0; j < length; j++) {
                    if (cost[i][j] < min) {
                        min = cost[i][j];
                        u = i; 
                        v = j;
                    }
                }
            }

            u = find(u, parent);
            v = find(v, parent);

            if (union(u, v, parent)) {
                ne++;
            }

            cost[u][v] = cost[v][u] = Infinity;
        }
    }

    var find = function (i, parent) {
        while (parent[i]) {
            i = parent[i];
        }
        return i;
    }

    var union = function (i, j, parent) {
        if (i != j) {
            parent[j] = i;
            return true;
        }

        return false;
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

var shortesPathA = graph.BFS(myVertices[2]);
console.log(shortesPathA);

var fromVertex = myVertices[0];
for (var i = 1; i < myVertices.length; i++) {
    var toVertex = myVertices[i];
    var path = [];
    for (var v = toVertex; v !== fromVertex; 
        v = shortesPathA.predecessors[v]) {
        path.push(v);
    }

    path.push(fromVertex);
    var s = path.pop();
    while (!path.length) {
        s += ' - ' + path.pop();
    }
}

graph.dfs(printNode);

var result = graph.DFS();
console.log(result);
