/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let wordId = new Map();
    let edge = [];
    let nodeNum = 0;

    function addEdge(word) {
        addWord(word);
        let id1 = wordId.get(word);
        let array = word.split('');
        let length = array.length;
        for (let i = 0; i < length; i++) {
            let tmp = array[i];
            array[i] = '*';
            let newWord = array.join('');
            addWord(newWord);
            let id2 = wordId.get(newWord);
            edge[id1].push(id2);
            edge[id2].push(id1);
            array[i] = tmp;
        }
    }

    function addWord(word) {
        if (!wordId.get(word)) {
            wordId.set(word, nodeNum++);
            edge.push([]);
        }
    }

    for (let word of wordList) {
        addEdge(word);
    }
    addEdge(beginWord);

    if (wordId.get(endWord) === undefined) {
        return 0;
    }
    
    let dis = new Array(nodeNum);
    dis.fill(Number.MAX_VALUE);
    let beginId = wordId.get(beginWord);
    let endId = wordId.get(endWord);
    dis[beginId] = 0;

    let que = [];
    que.push(beginId);

    while (que.length) {
        let x = que.shift();
        if (x === endId) {
            return parseInt(dis[endId] / 2) + 1;
        }
        for (let it of edge[x]) {
            if (dis[it] === Number.MAX_VALUE) {
                dis[it] = dis[x] + 1;
                que.push(it);
            }
        }
    }
    return 0;
};
