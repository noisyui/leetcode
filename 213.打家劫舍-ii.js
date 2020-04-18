/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    return Math.max(robByRange(nums, 0, nums.length - 1), robByRange(nums, 1, nums.length));
};

let robByRange = function (nums, start, end) {
    let cur = 0;
    let prev = 0;
    let temp;
    for (let i = start; i < end; i++) {
        temp = cur;
        cur = Math.max(prev + nums[i], cur);
        prev = temp;
    }
    return cur;
}
// @lc code=end

