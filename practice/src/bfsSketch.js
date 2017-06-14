// 广度优先搜索算法
// 先初始化每一个顶点为白色
var initializeColor = function () {
    var color = [];
    for (var i = 0; i < vertices.length; i++) {
        color[vertices[i]] = 'white';
    }

    return color;
}

this.bfs = function (v, callback) {
    initializeColor();
    var queue = new Queue();
    queue.enqueue(v);

    while(!queus.isEmpty()) {
        var u = queue.dequeue();
        var neighbore = adjList.get(u);
        color[u] = 'gray';
        for (var i = 0; i < neighbore.length; i++){
            var w = neighbore[i];
            if (color[w] === 'white') {
                queue.enqueue(w);
            }

        }
        color[u] = 'black';
        if (callback) {
            callback(u);
        }
    }
}
