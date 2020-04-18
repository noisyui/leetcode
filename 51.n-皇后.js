/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 *
 * https://leetcode-cn.com/problems/n-queens/description/
 *
 * algorithms
 * Hard (73.75%)
 * Likes:    774
 * Dislikes: 0
 * Total Accepted:    106.8K
 * Total Submissions: 144.9K
 * Testcase Example:  '4'
 *
 * n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * 
 * 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
 * 
 * 
 * 
 * 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 4
 * 输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
 * 解释：如上图所示，4 皇后问题存在两个不同的解法。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 1
 * 输出：[["Q"]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 皇后彼此不能相互攻击，也就是说：任何两个皇后都不能处于同一条横行、纵行或斜线上。
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let solutions = [];
    let queens = new Array(n).fill(-1);

    let columns = new Set();
    let diagonals1 = new Set();
    let diagonals2 = new Set();

    backtrack(solutions, queens, n, 0, columns, diagonals1, diagonals2);
    return solutions;
};

/**
 * 
 * @param {string[][]} solutions 
 * @param {number[]} queens 
 * @param {number} n 
 * @param {number} row 
 * @param {Set} columns 
 * @param {Set} diagonals1 
 * @param {Set} diagonals2 
 */
 let backtrack = (solutions, queens, n, row, columns, diagonals1, diagonals2) => {
    if (row === n) {
        solutions.push(generateBoard(queens, n));
    } else {
        for (let c = 0; c < n; c++) {
            if (columns.has(c)) continue;
            if (diagonals1.has(row - c)) continue;
            if (diagonals2.has(row + c)) continue;
            queens[row] = c;
            columns.add(c);
            diagonals1.add(row - c);
            diagonals2.add(row + c);
            backtrack(solutions, queens, n, row + 1, columns, diagonals1, diagonals2);
            queens[row] = -1;
            columns.delete(c);
            diagonals1.delete(row - c);
            diagonals2.delete(row + c);
        }
    }
};

/**
 * 
 * @param {number[]} queens 
 * @param {number} n 
 * @returns 
 */
let generateBoard = (queens, n) => {
    let board = [];
    for (let col of queens) {
        let row = new Array(n).fill('.');
        row[col] = 'Q';
        board.push(row.join(''));
    }
    return board;
};
// @lc code=end
