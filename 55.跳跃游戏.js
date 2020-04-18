/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let longest = 0;
    for (let i = 0; i < nums.length; i++) {
        longest = Math.max(i + nums[i], longest);
        if (longest >= nums.length - 1) return true;
        if (longest <= i) return false;
    }
};

canJump([3,2,1,0,4]);

// @lc code=end

