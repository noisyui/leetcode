/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    let ans = 0;
    let factor = 5;
    let res = Math.floor(n / factor);
    while (res) {
        ans += res;
        res = Math.floor(res / 5);
    }

    return ans;
};
// @lc code=end

