/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let height = board.length;
    let width = board[0].length;
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (board[i][j] === word[0]) {
                let occupied = [];
                occupied.push([{ x: i, y: j }]);
                while (occupied.length < word.length) {
                    let currentRow = occupied[occupied.length - 1];
                    if (currentRow.length === 0) {
                        occupied.pop();
                        if (occupied.length > 0) {
                            currentRow = occupied[occupied.length - 1];
                        }
                        while (occupied.length && currentRow && currentRow.length === 1) {
                            occupied.pop();
                            currentRow = occupied[occupied.length - 1];
                        }

                        if (occupied.length === 0) {
                            break;
                        } else {
                            currentRow.pop();
                        }
                    }
                    let current = currentRow[currentRow.length - 1];
                    let positions = [];
                    let up = current.x - 1;
                    let down = current.x + 1;
                    let left = current.y - 1;
                    let right = current.y + 1;
                    if (right < width) {
                        if (board[current.x][right] === word[occupied.length]) {
                            if (!isOccupied(occupied, current.x, right)) {
                                positions.push({ x: current.x, y: right });
                            }
                        }
                    }
                    if (left >= 0) {
                        if (board[current.x][left] === word[occupied.length]) {
                            if (!isOccupied(occupied, current.x, left)) {
                                positions.push({ x: current.x, y: left });
                            }
                        }
                    }
                    if (down < height) {
                        if (board[down][current.y] === word[occupied.length]) {
                            if (!isOccupied(occupied, down, current.y)) {
                                positions.push({ x: down, y: current.y });
                            }
                        }
                    }
                    if (up >= 0) {
                        if (board[up][current.y] === word[occupied.length]) {
                            if (!isOccupied(occupied, up, current.y)) {
                                positions.push({ x: up, y: current.y });
                            }
                        }
                    }

                    if (positions.length === 0) {
                        currentRow.pop();
                    } else {
                        occupied.push(positions);
                    }
                }

                if (occupied.length === word.length) {
                    return true;
                }
            }
        }
    }

    return false;
};

let isOccupied = (occupied, i, j) => {
    for (let row of occupied) {
        let last = row[row.length - 1];
        if (last.x === i && last.y === j) {
            return true;
        }
    }

    return false;
}


exist([["A", "B", "C", "E"], ["S", "F", "E", "S"], ["A", "D", "E", "E"]], "ABCESEEEFS");
// @lc code=end

