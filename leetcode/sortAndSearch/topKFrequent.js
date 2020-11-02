/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    var occurrences = {};
    for (var num of nums) {
        if (occurrences[num]) {
            occurrences[num] = occurrences[num] + 1;
        } else {
            occurrences[num] = 1;
        }
    }

    console.log(occurrences)

    var quene = [];
    for (var [num, count] of Object.entries(occurrences)) {
        console.log(num, count)
        if (quene.length === k) {
            if (quene[0].count < count) {
                quene.shift();
                quene.unshift({
                    num: num,
                    count: count
                });
                quene.sort((a, b) => {
                    return a.count - b.count;
                });
            }
        } else {
            quene.unshift({
                num: num,
                count: count
            });

            quene.sort((a, b) => {
                return a.count - b.count;
            });
        }
    }

    console.log(quene);

    var ret = [];
    for (var i = 0; i < k; i++) {
        ret[i] = parseInt(quene[i].num, 10);
    }

    return ret;
};

var nums = [5, 2, 5, 3, 5, 3, 1, 1, 3];
var k = 2;
console.log(topKFrequent(nums, k));