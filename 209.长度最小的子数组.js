/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    if(!nums || !nums.length) return 0;

    let left = 0;
    let sum = 0;
    let ans = Number.MAX_VALUE;

    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        while(sum >= s) {
            ans = Math.min(ans, i - left + 1);
            sum -= nums[left++];
        }
    }

    return ans === Number.MAX_VALUE ? 0 : ans;
};
// @lc code=end

