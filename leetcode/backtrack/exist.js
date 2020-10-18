/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const h = board.length;
    const w = board[0].length;
    const directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ];
    const visited = new Array(h);
    for (let i = 0; i < visited.length; ++i) {
        visited[i] = new Array(w).fill(false);
    }

    const check = (i, j, s, k) => {
        if (board[i][j] !== s[k]) {
            return false;
        } else if (k === s.length - 1) {
            return true;
        }

        visited[i][j] = true;
        let result = false;
        for (const [dx, dy] of directions) {
            let newI = i + dx;
            let newJ = j + dy;
            if (newI >= 0 && newI < h && newJ >= 0 && newJ < w) {
                if (!visited[newI][newJ]) {
                    const flag = check(newI, newJ, s, k + 1);
                    if (flag) {
                        result = true;
                        break;
                    }
                }
            }
        }
        visited[i][j] = false;
        return result;
    }

    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            const flag = check(i, j, word, 0);
            if (flag) {
                return true;
            }
        }
    }

    return false;
};


let board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"]
]

const res = exist(board, "ABCB");
console.log(res);