/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    s = s.trim();
    let stack = [];
    let num = 0
    let preSign = '+';
    let n = s.length;
    for (let i = 0; i < n; i++) {
        if (!isNaN(Number(s[i])) && s[i] !== ' ') {
            num = num * 10 + s[i].charCodeAt() - '0'.charCodeAt();
        }
        if (isNaN(Number(s[i])) || i === n - 1) {
            switch (preSign) {
                case '+':
                    stack.push(num);
                    break;
                case '-':
                    stack.push(-num);
                    break;
                case '*':
                    stack.push(stack.pop() * num);
                    break;
                case '/':
                    stack.push(parseInt(stack.pop() / num));
                    break;
            }
            preSign = s[i];
            num = 0;
        }   
    }
    
    let sum = 0;
    for (let i = 0; i < stack.length; i++) {
        sum += stack[i];
    }

    return sum;
};


var s = " 3+5 / 2 ";
let res = calculate(s);
console.log(res);