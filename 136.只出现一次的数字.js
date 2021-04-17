/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = nums[0];
    for(let i = 1; i < nums.length; i++) result ^= nums[i];
    return result;
};
// @lc code=end

