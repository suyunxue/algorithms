/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var hashMap = {};
    var ret = [];
    for (var i = 0; i < strs.length; i++) {
        let str = strs[i].split('').sort().join('');
        if (hashMap[str]) {
            hashMap[str].push(strs[i]);
        }
        else {
            hashMap[str] = [strs[i]];
        }
    }

    return Object.values(hashMap);
};

let res = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
console.log(res);