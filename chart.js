//表示顶点
function Vertex (label) {
	this.label = label;
}

// 使用邻接表表示矩阵

// 构建图
// 记录了多少条边，并使用一个长度与图的定点数相同的数组来记录顶点的数量
// 通过for循环为数组中每个元素添加一个子数组来存储所有的相邻节点
function Graph (v) {
	this.vertices = v;
	this.edage = 0;
	this.adj = [];
	for (var i = 0; i < this.vertices; i++) {
		this.adj[i] = [];
		this.adj[i].push('');
	}
	this.addEdge = addEdge;
	this.toString = toString;
}

function addEdge (v, w) {
	this.adj[v].push(w);
	this.adj[w].push(v);
	this.edges++;
}

function showGraph () {
	for (var i = 0; i < this.vertices; i++) {
		putStr(i + '->');
		for (var j = 0; j < this.vertices; j++) {
			if (this.adj[i][j] != undefined) 
				putStr(this.adj[i][j] + '');
		}
		print();
	}
}

// Graph类
function Graph (v) {
	this.vertices = v;
	this.edges = 0;
	this.adj = [];
	for (var i = 0; i < this.vertices; i++ ) {
		this.adj[i] = [];
		this.adj[i].push('');
	}
	this.addEdge = addEdge;
	this.showGraph = showGraph;
}

//深度优先搜索
//需要为graph类添加一个数组，用来存储已访问过的顶点
this.marked = [];
for (var i = 0; i < this.vertices; i++) {
	this.marked[i] = false;
}


//深度优先搜索函数
function dfs (v) {
	this.marked[v] = true;
	if (this.adj[v] != undefined) {
		print('visited vertex:' + v);
	}
	for each (var w in this.adj[v]) {
		if (!this.marked[w]) {
			this.dfs[w];
		}
	}
}

// 执行深度优先搜索
g = nre Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.showGraph();
g.dfs(0);


//广度优先搜索
//1.查找与当前顶点相邻的未访问顶点，将其添加到已访问顶点列表及队列中
// 2.从图中取出下一个顶点v，添加到已访问的顶点列表
// 3.将所有与v相邻的未访问顶点添加到队列

function bfs (s) {
	var queue = [];
	this.marked[s] = true;
	queue.push(s);  //添加到队尾
	while (queue.length > 0) {
		var v = queue.shift();  //从队首移除
		if (v == undefined) {
			print('visisted vertex : ' + v);
		}		                        
		for each (var w in this.adj[v]) {
			if (!this.marked[w]) {
				this.edgeTo[w] = v;
				this.marked[w] = true;
				queue.push(w);
			}
		}
	}
}


// 查找最短路径
// 使用广度优先
this.edgeTo = [];
//bfs函数
function bfs (s) {
	var queue = [];
	this.marked[s] = true;
	queue.push(s);  //添加到队尾
	while (queue.length > 0) {
		var v = queue.shift(); //从队首移除
		if (v == undefined) {
			print('visited vertex :' + v);
		}		     
		for each (var w in this.adj[v]) {
			if (!this.marked[w]) {
				this.edgeTo[w] = v;
				this.marked[w] = true;
				queue.push(w);
			}
		}                  
	}	                
}


//展示图中连接不同顶点的路径
// pathTo创建了一个栈，用来存储与指定顶点有共同边的所有顶点
function pathTo (v) {
	var source = 0;
	if (!this.hasPathTo(v)) {
		return undefined;
	}
	var path = [];
	for (var i = v; i != source; i = this.edgeTo[i]) {
		path.push(i);
	}
	path.push(s);
	return path;
}

function hashPathTo (v) {
	return this.marked[v];
}

g = new Graph(5);
g.addEdge(0, 1);
var vertext = 4;
var paths = g.pathTo(vertex);
while (paths.length > 0)  {
	if (paths.length > 1) {
		putStr(path.pop() + '');
	}
	else {
		putStr(paths.pop());
	}
}



//拓扑排序
//优先级约束调度
//设置排序进程，并调用一个辅助函数topSortHelper
function topSort () {
	var stack = [];
	var visited = [];
	for (var i = 0; i < this.vertices; i++) {
		visited[i] = false;
	}
	for (var i = 0; i < this.vertices; i++) {
		if (visited[i] == false) {
			this.topSortHelper(i, visited, stack);
		}
	}
	for (var i = 0; i < stack.length; i++) {
		if (stack[i] != undefined && stack[i] != false) {
			print(this.vertexList[stack[i]]);
		}
	}
}

//将当前顶点标记为已访问，然后递归访问当前顶点邻接表中的每个相邻顶点，标记这些顶点已访问
function topSortHelper (v, visited, stack) {
	visited[v] = true;
	for each (var w in this.adj[v]) {
		if (!visited[w]) {
			this.topSortHelper(visited[w], visited, stack);
		}
	}
	stack.push(v);
}

// graph类
function Graph (v) {
	this.vertices = v;
	this.vertexList = [];
	this.edges = 0;
	this.adj = [];
	for (var i = 0; i < this.vertices; i++) {
		this.adj[i] = [];
		this.ajd[i].push('');
	}
	this.addEdge = addEdge;
	this.showGraph = showGraph;
	this.dfs = dfs;
	this.marked = [];
	for (var i = 0; i < this.vertices; i++) {
		this.marked[i] = false;
	}
	this.bfs = bfs;
	this.edgeTo = [];
	this.hasPathTo = hasPathTo;
	this.topSortHelper = topSortHelper;
	this.topSort = topSort;
}


function addEdge (v, w) {
	this.adj[v].push(w);
	this.adj[w].push(v);
	this.edges++;
}

function showGraph () {
	var visited = [];
	for (var i = 0; i < this.vertices; i++) {
		putStr(this.vertexList[i] + '->');
		visited.push(this.vertexList[i]);
		for (var j = 0; j < this.vertices; j++) {
			if (this.adj[i][j] != undefined) {
				if (visited.indexOf(this.vertexList[j]) < 0) {
					putStr(this.vettexList[j] + '');
				}
			}
		}
		print();
		visited.pop();
	}
}

