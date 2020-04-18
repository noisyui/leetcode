/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {

    if (nums.length === 0) {
        return 0;
    }

    let dp = [1];
    let max = 1;
    for (let i = 1; i < nums.length; i++) {
        let maxVal = 0;
        for (let j = 0; j < i; j++) {
            if(nums[i] > nums[j]) {
                maxVal = Math.max(maxVal, dp[j]);
            } 
        }

        dp[i] = maxVal + 1;
        max = Math.max(max, dp[i]);
    }
    return max;
};
// @lc code=end

