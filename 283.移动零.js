/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let curr = 0;
    for(let num of nums) {
        if(num) nums[curr++] = num;
    }
    while(curr < nums.length) {
        nums[curr++] = 0;
    }
};
// @lc code=end

