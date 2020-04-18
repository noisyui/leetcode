/*
 * @lc app=leetcode.cn id=373 lang=javascript
 *
 * [373] 查找和最小的K对数字
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
    let res = [];
    let i1 = 0, i2 = 0;
    let next1 = 1, next2 = 1;
    while(res.length < k) {
        res.push([nums1[i1], nums2[i2]]);
    }


    return res;
};
// @lc code=end

