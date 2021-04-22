/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 *
 * https://leetcode-cn.com/problems/search-a-2d-matrix/description/
 *
 * algorithms
 * Medium (41.08%)
 * Likes:    426
 * Dislikes: 0
 * Total Accepted:    132.7K
 * Total Submissions: 298K
 * Testcase Example:  '[[1,3,5,7],[10,11,16,20],[23,30,34,60]]\n3'
 *
 * 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：
 * 
 * 
 * 每行中的整数从左到右按升序排列。
 * 每行的第一个整数大于前一行的最后一个整数。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == matrix.length
 * n == matrix[i].length
 * 1 
 * -10^4 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    if (!matrix || !matrix[0] || !matrix[0].length) return false;

    let m = matrix.length;
    let n = matrix[0].length;

    let rowL = 0, rowU = m - 1, rowM;
    while (rowL <= rowU) {
        rowM = Math.floor((rowL + rowU) / 2);
        if (matrix[rowM][n - 1] < target) {
            rowL = rowM + 1;
        } else if (matrix[rowM][0] > target) {
            rowU = rowM - 1;
        } else {
            break;
        }
    }

    let colL = 0, colU = n - 1, colM;
    while (colL <= colU) {
        colM = Math.floor((colL + colU) / 2);
        if (matrix[rowM][colM] < target) {
            colL = colM + 1;
        } else if (matrix[rowM][colM] > target) {
            colU = colM - 1;
        } else {
            return true;
        }
    }

    return false;
};
// @lc code=end

