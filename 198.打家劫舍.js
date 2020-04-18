/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    // if(nums.length === 0) return 0;
    // if(nums.length === 1) return nums[0];
    // if(nums.length === 2) return Math.max(nums[0], nums[1]);
    // let dp2 = Math.max(nums[0] + nums[2], nums[1]);
    // if(nums.lenth === 3) return dp2;
    // let dp = [nums[0], nums[1], dp2];
    // for (let i = 3; i < nums.length; i++) {
    //     dp[i] = Math.max(dp[i - 3], dp[i - 2]) + nums[i];
    // }

    // return Math.max(dp[nums.length - 2], dp[nums.length - 1]);
    let prevMax = 0, currMax = 0;
    for(let num of nums) {
        let temp = currMax;
        currMax = Math.max(currMax, prevMax + num);
        prevMax = temp;
    }
    return currMax;
};
// @lc code=end

