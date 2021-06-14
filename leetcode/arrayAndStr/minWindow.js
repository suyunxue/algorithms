/**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
function minWindow(s, t) {
let ori = {};
let cnt = {};
let tLen = t.length;
for (let i = 0; i < tLen; i++) {
    let c = t[i];
    ori[c] = (ori[c] || 0) + 1;
}
let l = 0; 
let r = -1;
let len = Number.MAX_VALUE;
let ansL = -1;
let ansR = -1;
let sLen = s.length;

while (r < sLen) {
    ++r;
    
    if (r < sLen && ori[s[r]]) {
        cnt[s[r]] = (cnt[s[r]] || 0) + 1;
    }

    while (check() && l <= r) {

        if (r - l + 1 < len) {
            len = r - l + 1;
            ansL = l;
            ansR = l + len;
        }

        if (ori[s[l]]) {
            cnt[s[l]] = (cnt[s[l]] || 0) - 1;
        }

        ++l;
    }
}

function check() {
    for (let key in ori) {
        let val = ori[key];
        if ((cnt[key] || 0) < val) {
            return false;
        }
    }

    return true;
}

return ansL === -1 ? "" : s.slice(ansL, ansR);
}




let s = "a";
let t = "a";
let res = minWindow(s, t);
console.log(res);