/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (!nums || !nums.length) {
        return 0
    }

    let currentIndex = 0;

    for(let i = 1; i< nums.length; i++) {
        if(nums[currentIndex] !== nums[i]) {
            currentIndex++;
            nums[currentIndex] = nums[i];
        }
    }

    return currentIndex + 1;
};
// @lc code=end

