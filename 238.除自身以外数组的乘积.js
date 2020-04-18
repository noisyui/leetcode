/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let result = [1];
    for (let i = 1; i < nums.length; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }

    let R = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] = R * result[i];
        R *= nums[i];
    }

    return result;
};
// @lc code=end

