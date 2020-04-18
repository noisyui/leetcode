/*
 * @lc app=leetcode.cn id=766 lang=javascript
 *
 * [766] 托普利茨矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
    let m = matrix.length, n = matrix[0].length;
    for (let x = 1; x < m; x++) {
        for (let y = 1; y < n; y++) {
            if (matrix[x][y] - matrix[x - 1][y - 1]) return false;
        }
    }
    return true;
};
// @lc code=end

