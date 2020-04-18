/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let i = m - 1, j = n - 1;
    for (; i >= 0 && j >= 0;) {
        if (nums2[j] > nums1[i]) {
            nums1[i + j + 1] = nums2[j];
            j--;
        } else if (nums2[j] < nums1[i]) {
            nums1[i + j + 1] = nums1[i];
            i--;
        } else {
            nums1[i + j + 1] = nums1[i];
            nums1[i + j] = nums1[i];
            i--;
            j--;
        }
    }

    if (i < 0) {
        while (j >= 0) {
            nums1[j] = nums2[j]
            j--;
        }
    }
};
// @lc code=end

