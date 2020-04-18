/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let left = 0, right = 0;
    for (; right < nums.length; right++) {
        if(nums[right] !== val) {
            nums[left++] = nums[right];
        }
    }

    return left;
};
// @lc code=end

