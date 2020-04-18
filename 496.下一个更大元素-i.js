/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let len = nums2.length;
    let stack = [];
    let nextIndex = {};
    for (let i = len - 1; i >= 0; i--) {
        const element = nums2[i];
        while (stack.length && element > stack[stack.length - 1]) {
            stack.pop();
        }
        nextIndex[element] = stack.length ? stack[stack.length - 1] : -1;
        stack.push(element);
    }

    let result = new Array(nums1.length);
    for (let i = 0; i < nums1.length; i++) {
        result[i] = nextIndex[nums1[i]];
    }

    return result;
};
// @lc code=end

