/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(target <= nums[0]) return 0;
    if(target > nums[nums.length - 1]) return nums.length;

    let left = 0, right = nums.length - 1, mid = left + Math.floor((right - left) / 2);
    while(right - left > 1) {
        if(target < nums[mid]) right = mid;
        else if (nums[mid] < target) left = mid;
        else return mid;
        mid = left + Math.floor((right - left) / 2);
    }

    return mid + 1;
};
// @lc code=end

