/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let N = nums.length;
    if (N === 0) return -1;
    if (N === 1) return nums[0] === target ? 0 : -1;

    let l = 0, r = N - 1;
    while (l <= r) {
        let mid = Math.trunc((l + r) / 2);
        if (nums[mid] === target)  return mid;
        if (nums[l] === target)  return l;
        if (nums[r] === target)  return r;

        if (nums[l] < nums[mid]) {
            if (nums[l] < target && target < nums[mid]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        } else {
            if (nums[mid] < target && target < nums[r]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
    }

    return -1;
};

let result = search([3, 1], 1);
// @lc code=end

