/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 *
 * https://leetcode-cn.com/problems/n-queens-ii/description/
 *
 * algorithms
 * Hard (82.30%)
 * Likes:    254
 * Dislikes: 0
 * Total Accepted:    61.6K
 * Total Submissions: 74.8K
 * Testcase Example:  '4'
 *
 * n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * 
 * 给你一个整数 n ，返回 n 皇后问题 不同的解决方案的数量。
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 4
 * 输出：2
 * 解释：如上图所示，4 皇后问题存在两个不同的解法。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 1
 * 输出：1
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
 * @return {number}
 */
var totalNQueens = function(n) {
    let columns = new Set();
    let diagonals1 = new Set();
    let diagonals2 = new Set();
    return backtrack(n, 0, columns, diagonals1, diagonals2);
};

/**
 * @param {number} solutions 
 * @param {number[]} queens 
 * @param {number} n 
 * @param {number} row 
 * @param {Set} columns 
 * @param {Set} diagonals1 
 * @param {Set} diagonals2 
 */
 let backtrack = (n, row, columns, diagonals1, diagonals2) => {
    if (row === n) return 1;
    let count = 0;
    for (let c = 0; c < n; c++) {
        if (columns.has(c)) continue;
        if (diagonals1.has(row - c)) continue;
        if (diagonals2.has(row + c)) continue;
        columns.add(c);
        diagonals1.add(row - c);
        diagonals2.add(row + c);
        count += backtrack(n, row + 1, columns, diagonals1, diagonals2);
        columns.delete(c);
        diagonals1.delete(row - c);
        diagonals2.delete(row + c);
    }
    return count;
};

// @lc code=end

