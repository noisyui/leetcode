/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let ans = [];

    let start = 0;
    let preMax = -Number.MAX_VALUE;

    while (start < nums.length - k + 1) {
        let end = start + k;
        if (start > 0 && nums[start - 1] !== preMax) {
            preMax = Math.max(preMax, nums[end - 1])
        } else {
            preMax = nums[start];
            for (let i = start; i < end; i++) {
                if (nums[i] > preMax) preMax = nums[i];
            }
        }

        ans.push(preMax);

        // update
        start++;
    }

    return ans;
};
// @lc code=end

