/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let copy = x < 0 ? -x : x;
    let reversed = 0;
    while (copy) {
        reversed = reversed * 10 + copy % 10;
        copy = Math.floor(copy / 10);
    }
    reversed = reversed > Math.pow(2, 31) ? 0 : reversed;
    return x < 0 ? -reversed : reversed;
};

reverse(-123);
// @lc code=end

