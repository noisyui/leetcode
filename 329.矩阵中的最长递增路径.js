/*
 * @lc app=leetcode.cn id=329 lang=javascript
 *
 * [329] 矩阵中的最长递增路径
 *
 * https://leetcode-cn.com/problems/longest-increasing-path-in-a-matrix/description/
 *
 * algorithms
 * Hard (40.06%)
 * Likes:    428
 * Dislikes: 0
 * Total Accepted:    41.4K
 * Total Submissions: 88.7K
 * Testcase Example:  '[[9,9,4],[6,6,8],[2,1,1]]'
 *
 * 给定一个 m x n 整数矩阵 matrix ，找出其中 最长递增路径 的长度。
 * 
 * 对于每个单元格，你可以往上，下，左，右四个方向移动。 你 不能 在 对角线 方向上移动或移动到 边界外（即不允许环绕）。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：matrix = [[9,9,4],[6,6,8],[2,1,1]]
 * 输出：4 
 * 解释：最长递增路径为 [1, 2, 6, 9]。
 * 
 * 示例 2：
 * 
 * 
 * 输入：matrix = [[3,4,5],[3,2,6],[2,2,1]]
 * 输出：4 
 * 解释：最长递增路径是 [3, 4, 5, 6]。注意不允许在对角线方向上移动。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：matrix = [[1]]
 * 输出：1
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
 * 0 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
    let m = matrix.length;
    if (!m) return 0;
    let n = matrix[0].length;
    if (!n) return 0;

    let ans = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!ans[i]) {
                ans[i] = [];
            }
            ans[i][j] = 0;
        }
    }

    let longest = 1;
    let dx = [0, 0, 1, -1];
    let dy = [1, -1, 0, 0];

    let dfs = (i, j) => {
        if (ans[i][j]) {
            return ans[i][j];
        }
        ans[i][j] = 1;
        for (let k = 0; k < dx.length; k++) {
            let x = i + dx[k];
            let y = j + dy[k];
            if (x >= 0 && x < m && y >= 0 && y < n && matrix[x][y] > matrix[i][j]) {
                ans[i][j] = Math.max(ans[i][j], dfs(x, y) + 1);
            }
        }
        return ans[i][j];
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            longest = Math.max(longest, dfs(i, j));
        }
    }

    return longest;
};

longestIncreasingPath([[9, 9, 4], [6, 6, 8], [2, 1, 1]]);
// @lc code=end

