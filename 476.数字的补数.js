/*
 * @lc app=leetcode.cn id=476 lang=javascript
 *
 * [476] 数字的补数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
    if (num === 0) return 1;
    let i = 1;
    while (i <= num) i *= 2;
    return i - num - 1;
};

findComplement(4);
// @lc code=end

