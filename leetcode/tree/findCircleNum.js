/**
 * @param {number[][]} isConnected
 * @return {number}
 */
 var findCircleNum = function(isConnected) {
    let friends = isConnected.length;
    let counts = 0;
    let visit = new Array(friends).fill(0);
    let queue = [];
    for (let i = 0; i < friends; i++) {
        if (!visit[i]) {
            queue.push(i);
            while (queue.length) {
                let k = queue.shift();
                visit[k] = 1;
                for (let j = 0; j < friends; j++) {
                    if (isConnected[k][j] === 1 && !visit[j]) {
                        queue.push(j);
                    }
                }
            }
            counts += 1;
        }
    }
    return counts;
};