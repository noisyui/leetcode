/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续1的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let prevMax = 0;
    let currMax = 0;
    for (let num of nums) {
        if (num) {
            currMax++;
        } else {
            currMax = 0;
        }

        if (currMax > prevMax) {
            prevMax = currMax;
        }
    }

    return prevMax;
};
// @lc code=end

