/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function(numCourses, prerequisites) {
    let indegrees = new Array(numCourses).fill(0);
    let adjacency = [];
    let queue = [];
    
    for (let i = 0; i < numCourses; i++) {
        adjacency.push([]);
    }

    for (let i = 0; i < prerequisites.length; i++) {
        let cp = prerequisites[i];
        indegrees[cp[0]]++;
        adjacency[cp[1]].push(cp[0]);
    }
    
    for (let i = 0; i < numCourses; i++) {
        if (indegrees[i] === 0) {
            queue.push(i);
        }
    }

    while (queue.length) {
        let pre = queue.shift();
        numCourses--;
        for (let i = 0; i < adjacency[pre].length; i++) {
            let cur = adjacency[pre][i];
            if (--indegrees[cur] === 0) {
                queue.push(cur);
            }
        }
    }

    return numCourses === 0;
};

