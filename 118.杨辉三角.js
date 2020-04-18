/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows < 1) return [];
    if (numRows === 1) return [[1]];
    if (numRows === 2) return [[1], [1, 1]];

    let result = [[1], [1, 1]];

    for (let r = 3; r <= numRows; r++) {
        let topRow = result[result.length - 1];
        let curRow = [1];
        for (let i = 0; i < topRow.length - 1; i++) {
            curRow[i + 1] = topRow[i] + topRow[i + 1];
        }
        curRow.push(1);
        result.push(curRow);
    }

    return result;
};
// @lc code=end

