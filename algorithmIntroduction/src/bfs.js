// // 算法实现

const map = {
    '武汉': {
        '广州': {},
        '西藏': {},
        '上海': {}
    },
    '上海': {
        '武汉': {},
        '广州': {}
    }
};

function breadthSearch(obj, goal, arr = ['北京']) {
    for (let key in obj) {
        if (arr.indexOf(key) < 0) {
            arr.push(key);
            if (key === goal) {
                return arr;
            }
            else {
                return breadthSearch(obj[key], goal, arr);
            }
        }
    }
}

let res = breadthSearch(map, '广州');

console.log(res);


