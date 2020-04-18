/*
 * @lc app=leetcode.cn id=908 lang=javascript
 *
 * [908] 最小差值 I
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function (A, K) {
    let min = A[0], max = A[0];
    for (let num of A) {
        if (num < min) min = num;
        else if (num > max) max = num;
    }

    let diff = max - min - 2 * K;
    return diff > 0 ? diff : 0;
};
// @lc code=end

