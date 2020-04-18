/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
    if (num & (num - 1)) return false;

    while (num && (num !== 1)) {
        num >>>= 2;
    }
    return num === 1;
};
// @lc code=end

