/*
 * @lc app=leetcode.cn id=378 lang=javascript
 *
 * [378] 有序矩阵中第K小的元素
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    this.res = [];
    this.candidates = [[0, 0, matrix[0][0]]];

    while (this.res.length < k) {
        update(matrix);
    }

    return this.res[k - 1][2];
};

let update = function (matrix) {
    this.candidates.sort((a, b) => b[2] - a[2]);
    let cur = this.candidates.pop();
    this.res.push(cur);

    let newI = cur[0] + 1;
    let newJ = cur[1] + 1;
    if (newI < matrix.length) {
        let value = matrix[newI][cur[1]];
        if (value !== null) {
            matrix[newI][cur[1]] = null;
            this.candidates.push([newI, cur[1], value]);
        }
    }
    if (newJ < matrix[0].length) {
        let value = matrix[cur[0]][newJ];
        if (value !== null) {
            matrix[cur[0]][newJ] = null;
            this.candidates.push([cur[0], newJ, value]);
        }
    }
}

kthSmallest([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 20);

// @lc code=end

