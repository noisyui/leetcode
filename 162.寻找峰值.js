/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let l = 0, r = nums.length - 1;
    while (l < r) {
        let mid = Math.trunc((l + r) / 2);
        if(nums[mid] > nums[mid + 1]) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }

    return l;
};

findPeakElement([1,2,3,1]);
// @lc code=end

