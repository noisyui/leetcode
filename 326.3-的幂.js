/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    const MAX = Math.pow(3, 19);
    return n > 0 && MAX % n === 0;
};
// @lc code=end

