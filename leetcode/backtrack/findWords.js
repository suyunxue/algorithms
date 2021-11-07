var Trie = function () {
    this.word = '';
    this.children = new Map();
}

Trie.prototype.insert = function (word) {
    var cur = this;
    for (let i = 0; i < word.length; i++) {
        var c = word[i];
        if (!cur.children.get(c)) {
            cur.children.set(c, new Trie());
        }
        cur = cur.children.get(c);
    }
    cur.word = word;
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
    var trie = new Trie();
    for (var word of words) {
        trie.insert(word);
    }

    var ans = new Set();
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            dfs(board, trie, i, j, ans);
        }
    }

    return Array.from(ans);
};

function dfs(board, now, i1, j1, ans) {
    var dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ];

    if (!now.children.get(board[i1][j1])) {
        return;
    }

    var ch = board[i1][j1];
    now = now.children.get(ch);

    if ('' !== now.word) {
        ans.add(now.word);
    }

    board[i1][j1] = '#';

    for (var dir of dirs) {
        var i2 = i1 + dir[0];
        var j2 = j1 + dir[1];
        if (i2 >= 0 && i2 < board.length && j2 >= 0 && j2 < board[0].length) {
            dfs(board, now, i2, j2, ans);
        }
    }

    board[i1][j1] = ch;
}

var board = [
    ["o", "a", "a", "n"],
    ["e", "t", "a", "e"],
    ["i", "h", "k", "r"],
    ["i", "f", "l", "v"]
];
var words = ["oath", "pea", "eat", "rain"];

var res = findWords(board, words);
console.log(res);