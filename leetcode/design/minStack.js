/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    // if(this.min_stack.length == 0 || this.min_stack[this.min_stack.length-1] >= x){
    //     this.min_stack.push(x);
    // }

    if (!this.minStack.length) {
        this.minStack.push(x);
    } else if (x <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(x);
    }
    this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let x = this.stack.pop();
    if (x === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};
