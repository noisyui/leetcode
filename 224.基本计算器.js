/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
Array.prototype.top = function () {
    return this[this.length - 1];
};

var calculate = function (s) {
    let ops = [1];
    let sign = 1;

    let ans = 0;
    let n = s.length;
    let i = 0;
    while (i < n) {
        if (s[i] === ' ') {
            i++;
        } else if (s[i] === '+') {
            sign = ops.top();
            i++;
        } else if (s[i] === '-') {
            sign = -ops.top();
            i++;
        } else if (s[i] === '(') {
            ops.push(sign);
            i++;
        } else if (s[i] === ')') {
            ops.pop();
            i++;
        } else {
            let num = 0;
            while (i < n) {
                let digit = parseInt(s[i]);
                if (isNaN(digit)) break;
                num = num * 10 + digit;
                i++;
            }
            ans += sign * num;
        }
    }
    return ans;
};

console.log(Number.isNaN(parseInt(' ')));
// @lc code=end
