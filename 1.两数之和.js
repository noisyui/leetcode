/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let processed = {};
    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        let complementIndex = processed[target - current];
        if (complementIndex !== undefined) {
            return [complementIndex, i];
        }
        processed[current] = i;
    }
    throw new Error('No solution for this puzzle.');
};
// @lc code=end

