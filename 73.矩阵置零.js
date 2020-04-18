/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let R = matrix.length;
    let C = matrix[0].length;
    let rows = new Set();
    let columns = new Set();
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            if(matrix[i][j] === 0) {
                rows.add(i);
                columns.add(j);
            }
        }
    }

    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            if(rows.has(i) || columns.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }
};
// @lc code=end

