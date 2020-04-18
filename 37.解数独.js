/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 *
 * https://leetcode-cn.com/problems/sudoku-solver/description/
 *
 * algorithms
 * Hard (67.06%)
 * Likes:    817
 * Dislikes: 0
 * Total Accepted:    77.8K
 * Total Submissions: 116.1K
 * Testcase Example:  '[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]'
 *
 * 编写一个程序，通过填充空格来解决数独问题。
 * 
 * 数独的解法需 遵循如下规则：
 * 
 * 
 * 数字 1-9 在每一行只能出现一次。
 * 数字 1-9 在每一列只能出现一次。
 * 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
 * 
 * 
 * 数独部分空格内已填入了数字，空白格用 '.' 表示。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入：board =
 * [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
 * 
 * 输出：[["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
 * 解释：输入的数独如上图所示，唯一有效的解决方案如下所示：
 * 
 * 
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * board.length == 9
 * board[i].length == 9
 * board[i][j] 是一位数字或者 '.'
 * 题目数据 保证 输入数独仅有一个解
 * 
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
var solveSudoku = function(board) {
    let line = [];
    let column = [];
    let block = [[], [], []];
    let spaces = [];
    let valid = false;

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let bi = Math.floor(i / 3);
            let bj = Math.floor(j / 3);
            if (line[i] === undefined) line[i] = [];
            if (column[j] === undefined) column[j] = [];
            if (block[bi] === undefined) block[bi] = [];
            if (block[bi][bj] === undefined) block[bi][bj] = [];

            let b = board[i][j];
            if (b === '.') {
                spaces.push([i, j]);
            } else {
                let digit = parseInt(b);
                line[i][digit] = column[j][digit] = block[bi][bj][digit] = true;
            }
        }
    }

    let dfs = (bd, pos) => {
        if (pos === spaces.length) {
            valid = true;
            return;
        }

        let space = spaces[pos];
        for (let digit = 1; digit <= 9 && !valid; digit++) {
            let i = space[0], bi = Math.floor(i / 3);
            let j = space[1], bj = Math.floor(j / 3);
            if (line[i][digit] || column[j][digit] || block[bi][bj][digit])
                continue;
            line[i][digit] = column[j][digit] = block[bi][bj][digit] = true;
            bd[i][j] = digit + '';
            dfs(bd, pos + 1);
            line[i][digit] = column[j][digit] = block[bi][bj][digit] = false;
        }
    }

    dfs(board, 0);
};
// @lc code=end

