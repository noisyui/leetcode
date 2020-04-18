/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let len = heights.length;
    if (len === 0) return 0;
    if (len === 1) return heights[0];

    heights.push(0);
    heights.unshift(0);
    len += 2;

    let area = 0;
    let stack = [0];

    for (let i = 1; i < len; i++) {
        while (heights[stack[stack.length - 1]] > heights[i]) {
            let height = heights[stack.pop()];
            let width = i - stack[stack.length - 1] - 1;
            area = Math.max(area, width * height);
        }
        stack.push(i);
    }

    return area;

    // let ans = 0;
    // let left = [];
    // let stack = [];
    // for (let i = 0; i < heights.length; i++) {
    //     let h = heights[i];
    //     while (stack.length && heights[stack[stack.length - 1]] >= h) {
    //         stack.pop();
    //     }
    //     if (stack.length) {
    //         left.push(stack[stack.length - 1]);
    //     } else {
    //         left.push(-1);
    //     }
    //     stack.push(i);
    // }

    // let right = [];
    // stack = [];
    // for (let i = heights.length - 1; i >= 0; i--) {
    //     let h = heights[i];
    //     while (stack.length && heights[stack[stack.length - 1]] >= h) {
    //         stack.pop();
    //     }
    //     if (stack.length) {
    //         right.unshift(stack[stack.length - 1]);
    //     } else {
    //         right.unshift(heights.length);
    //     }
    //     stack.push(i);
    // }

    // for (let i = 0; i < left.length; i++) {
    //     let area = (right[i] - left[i] - 1) * heights[i];
    //     ans = Math.max(area, ans);
    // }

    // return ans;
};

largestRectangleArea([2,1,5,6,2,3]);
// @lc code=end

