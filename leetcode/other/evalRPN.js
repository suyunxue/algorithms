/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    for (let i = 0; i < tokens.length; i++) {
        switch(tokens[i]) {
            case '+': stack.push(Number(stack.pop()) + Number(stack.pop())); break;
            case '-': stack.push(-Number(stack.pop()) + Number(stack.pop())); break;
            case '*': stack.push(Number(stack.pop()) * Number(stack.pop())); break;
            case '/': stack.push(parseInt(1 / Number(stack.pop()) * Number(stack.pop()))); break;
            default: stack.push(tokens[i]); break;
        }
    }
    return stack.pop();
};

let input = ["4","3","-"];
let res = evalRPN(input);
console.log(res);