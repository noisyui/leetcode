/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let l = 0, r = numbers.length - 1;
    let sum = numbers[l] + numbers[r];
    while (sum !== target) {
        sum > target ? r-- : l++;
        sum = numbers[l] + numbers[r];
    }

    return [l + 1, r + 1];
};
// @lc code=end

