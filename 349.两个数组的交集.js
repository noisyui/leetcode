/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let ans = [];
    let map = new Map();
    for(let num of nums1) map.set(num, 0);
    for(let num of nums2) {
        if(map.has(num)) map.set(num, 1);
    }
    for(let [key, value] of map.entries()) {
        if(value) ans.push(key);
    }
    return ans;
};
// @lc code=end

