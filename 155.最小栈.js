/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stack = [];
    this.minStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack.push(x);
    if (this.minStack.length === 0) {
        this.minStack.push(x);
    } else {
        let min = this.minStack[this.minStack.length - 1];
        if (x <= min) {
            this.minStack.push(x);
        }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.stack.length) {
        let poped = this.stack.pop();
        if (poped === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
        return poped;
    }
    return null;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    if (this.stack.length) {
        return this.stack[this.stack.length - 1];
    }
    return null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    if (this.minStack.length) {
        return this.minStack[this.minStack.length - 1];
    }
    return null;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

