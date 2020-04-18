/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];
    let top;

    for (let token of tokens) {
        switch (token) {
            case '+':
                top = stack.pop();
                stack[stack.length - 1] += top;
                break;
            case '-':
                top = stack.pop();
                stack[stack.length - 1] -= top;
                break;
            case '*':
                top = stack.pop();
                stack[stack.length - 1] *= top;
                break;
            case '/':
                top = stack.pop();
                let floor = Math.trunc(stack[stack.length - 1] / top);
                stack[stack.length - 1] = floor;
                break;
            default:
                stack.push(parseInt(token));
                break;
        }
    }

    return stack[0];
};
// @lc code=end

