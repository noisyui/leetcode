/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex < 0) return [];
    if (rowIndex === 0) return [1];
    if (rowIndex === 1) return [1, 1];

    let top = [1, 1];
    let cur = [1];

    for (let r = 2; r <= rowIndex; r++) {
        cur = [1];
        for (let i = 1; i < top.length; i++) {
            cur[i] = top[i - 1] + top[i];
        }
        cur.push(1);
        top = cur;
    }

    return cur;
};

getRow(3);
// @lc code=end

