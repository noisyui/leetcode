/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false;

    let copy = x;
    let reversed = 0;
    while (copy) {
        reversed = reversed * 10 + copy % 10;
        copy = Math.floor(copy / 10);
    }

    return x === reversed;
};

isPalindrome(121);
// @lc code=end

