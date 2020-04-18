/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(nums.length === 1) return nums[0];
    if(nums[0] < nums[nums.length - 1]) return nums[0];
    return recursive(nums, 0, nums.length - 1);
};

let recursive = function(nums, left, right) {
    if(right - left === 1) return nums[right];
    let mid = Math.floor((left + right) / 2);
    if(nums[mid] > nums[0]) {
        return recursive(nums, mid, right);
    } else {
        return recursive(nums, left, mid);
    }
}
// @lc code=end

