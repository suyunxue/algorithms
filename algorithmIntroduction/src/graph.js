// https://segmentfault.com/a/1190000011526255

class Graph {
    constructor() {
        this.vertices = [];
        this.adjList = new Map();
    }

    addVertex(v) {
        this.vertices.push(v);
        this.adjList.set(v, []);
    }

    addEdge(v, w) {
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v);
    }

    bfs(v, cb) {
        let graphStatus = new GraphStatus();
        let queue = [v];
        while (queue.length > 0) {
            let u = queue.shift();
            graphStatus.detect(v);
            this.adjList.get(u).forEach(item => {
                if (!graphStatus.isDetected(item)) {
                    graphStatus.detect(item);
                    queue.push(item);
                }
            });
            if (cb) {
                cb(u);
            }
        }
    }

    dfs(v, cb) {
        let stack = [];
        let colorStatus = new GraphStatus();
        stack.push(v);
        while (stack.length > 0) {
            let u = stack.pop();
            colorStatus.detect(u);
            console.log(this.adjList.get(u));
            this.adjList.get(u).forEach(item => {
                if (!colorStatus.detect(item)) {
                    stack.push(item);
                    colorStatus.detect(u);
                }
            })
        }
        if (cb) {
            cb(u);
        }
    }

    findDepth(v) {
        let colorStatus = new GraphStatus();
        let depth = 0;
        let vPath = {[v]: [v]};
        let vDepth = {};
        let queue = [];
        while (queue.length > 0) {
            depth++;
            let u = queue.shift();
            colorStatus.detect(u);
            let edgeVertex = this.adjList.get(u);
            edgeVertex.forEach(item => {
                colorStatus.detect(item);
                queue.push(item);
                vPath[item] = [...vPath, item];
                vDepth[item] = depth;
            })
        }

        return {depth: vDepth, vPath: vPath};
    }
}

class GraphStatus {
    constructor() {
        this.status = {};
    }

    detect(key) {
        this.status[key] = true;
    }

    isDetected(key) {
        return !!this.status[key];
    }
}

let graph = new Graph();
let DFSarry = ['a', 'b', 'c', 'd', 'e', 'f'];
for (let i = 0; i < DFSarry.length; i++) {
    graph.addVertex(DFSarry[i]);
}
graph.addEdge('a', 'c');
graph.addEdge('a', 'd');
graph.addEdge('b', 'd');
graph.addEdge('b', 'e');
graph.addEdge('c', 'f');
graph.addEdge('f', 'e');

let result = graph.bfs('a', (u) => {
    console.log(u);
});
