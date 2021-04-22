/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 *
 * https://leetcode-cn.com/problems/surrounded-regions/description/
 *
 * algorithms
 * Medium (42.56%)
 * Likes:    495
 * Dislikes: 0
 * Total Accepted:    93.1K
 * Total Submissions: 218.5K
 * Testcase Example:  '[["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]'
 *
 * 给你一个 m x n 的矩阵 board ，由若干字符 'X' 和 'O' ，找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X'
 * 填充。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：board =
 * [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
 * 输出：[["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
 * 解释：被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，或不与边界上的 'O' 相连的 'O'
 * 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：board = [["X"]]
 * 输出：[["X"]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == board.length
 * n == board[i].length
 * 1 
 * board[i][j] 为 'X' 或 'O'
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    const m = board.length;
    if (!m) return;
    const n = board[0].length;
    if (!n) return;

    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];
    const queue = [];

    for (let i = 0; i < m; i++) {
        if (board[i][0] === 'O') queue.push([i, 0]);
        if (board[i][n - 1] === 'O') queue.push([i, n - 1])
    }
    for (let i = 1; i < n - 1; i++) {
        if (board[0][i] === 'O') queue.push([0, i]);
        if (board[m - 1][i] === 'O') queue.push([m - 1, i]);
    }

    while (queue.length) {
        let head = queue.shift();
        board[head[0]][head[1]] = 'A';
        for (let i = 0; i < dx.length; i++) {
            let x = head[0] + dx[i];
            let y = head[1] + dy[i];

            if (x < 0 || x >= m || y < 0 || y >= n || board[x][y] !== 'O') {
                continue;
            }
            queue.push([x, y]);
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'A') {
                board[i][j] = 'O';
            } else if (board[i][j] === 'O') {
                board[i][j] = 'X';
            }
        }
    }
};
// @lc code=end

