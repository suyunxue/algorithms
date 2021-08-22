/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
 var findOrder = function(numCourses, prerequisites) {
    // 存储有向图
    let edges = [];

    // 标记每个节点的状态，0=未搜索，1=搜索中，2=已完成
    let visited = [];

    // 用数组来模拟栈，下标n - 1未栈底，0位栈顶
    let result = [];

    // 判断有向图中是否有环
    let valid = true;

    // 栈下标
    let index;

    function dfs(u) {
        visited[u] = 1;

        for (let i = 0; i < edges[u].length; i++) {
            let v = edges[u][i];
            if (visited[v] === 0) {
                dfs(v);
                if (!valid) {
                    return;
                }
            }
            else if (visited[v] === 1) {
                valid = false;
                return; 
            }
        }

        visited[u] = 2;

        result[index--] = u;
    }

    for (let i = 0; i < numCourses; i++) {
        edges.push([]);
    }

    visited = new Array(numCourses).fill(0);
    result = new Array(numCourses);
    index = numCourses - 1;
    for (let i = 0; i < prerequisites.length; i++) {
        let info = prerequisites[i];
        edges[info[1]].push(info[0]);
    }

    for (let i = 0; i < numCourses && valid; i++) {
        if (visited[i] === 0) {
            dfs(i);
        }
    }

    if (!valid) {
        return [];
    }

    // 如果没有环，那么就有拓扑排序
    return result;

};

let res = findOrder(2, [[1, 0]]);
console.log(res);
