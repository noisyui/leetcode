/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let n = Math.floor(nums.length / 2);
    let map = {};
    for (let num of nums) {
        if (!map[num]) map[num] = 0;
        if (++map[num] > n) return num;
    }
};

majorityElement([3, 2, 3]);
// @lc code=end

