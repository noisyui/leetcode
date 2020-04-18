/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let stack = [];
    let preSign = '+';
    let num = 0;
    let n = s.length;
    for (let i = 0; i < n; i++) {
        if (s[i] === ' ') continue;
        if (!isDigit(s[i])) {
            preSign = s[i];
        } else {
            while (isDigit(s[i])) {
                num = num * 10 + parseInt(s[i]);
                i++;
            }
            if (preSign === '+') stack.push(num);
            if (preSign === '-') stack.push(-num);
            if (preSign === '*') stack[stack.length - 1] *= num;
            if (preSign === '/') stack[stack.length - 1] = Math.trunc(stack[stack.length - 1] / num);
            num = 0, i--;
        }
    }
    return stack.reduce((accu, curr) => accu + curr);
};

let isDigit = c => {
    return !isNaN(parseInt(c));
}
// @lc code=end

console.log(calculate(' 3/2 '));