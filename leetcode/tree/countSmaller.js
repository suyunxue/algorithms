/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var countSmaller = function(nums) {
    var c;
    var a;
    var resultList = [];
    discretization(nums);
    init(nums.length + 5);
    for (let i = nums.length - 1; i >= 0; i--) {
        let id = getId(nums[i]);
        resultList.push(query(id - 1)); 
        update(id);
    }

    resultList.reverse();
    return resultList;

    function update(pos) {
        while (pos < c.length) {
            c[pos] += 1;
            pos += lowBit(pos);
        }
    }
    function discretization(nums) {
        let set = new Set();
        for (let num of nums) {
            set.add(num);
        }
        let size = set.size;
        a = new Array(size);
        let index = 0;
        for (let num of set) {
            a[index++] = num;
        }
        a.sort((a, b) => a - b);
    }
    function init(length) {
        c = new Array(length).fill(0);
    }
    function query(pos) {
        let ret = 0;
        while (pos > 0) {
            ret += c[pos];
            pos -= lowBit(pos);
        }
        return ret;
    }
    function lowBit(x) {
        return x & (-x);
    }
    function getId(x) {
        return a.indexOf(x) + 1;
    }
};