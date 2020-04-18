/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {

    if(matrix[0] === undefined) {
        return matrix;
    } else if(matrix.length === 1) {
        return matrix[0];
    } else if(matrix[0].length === 1) {
        let ans = [];
        for (let row of matrix) {
            ans.push(row[0]);
        }
        return ans;
    }

    let R = matrix.length;
    let C = matrix[0].length;
    let i = 0, j = 0;
    let direct = 0;
    let ans = [matrix[0][0]];
    matrix[0][0] = undefined;
    let next;
    while (true) {
        if (direct === 0) {
            next = matrix[i][++j];
            if (next === undefined) {
                break;
            }
            while (next !== undefined) {
                ans.push(next);
                matrix[i][j] = undefined;
                if (++j < C) {
                    next = matrix[i][j];
                } else {
                    break;
                }
            }
            j--;
            direct = 1;
        } else if (direct === 1) {
            next = matrix[++i][j];
            if (next === undefined) {
                break;
            }
            while (next !== undefined) {
                ans.push(next);
                matrix[i][j] = undefined;
                if (++i < R) {
                    next = matrix[i][j];
                } else {
                    break;
                }
            }
            i--;
            direct = 2;
        } else if (direct === 2) {
            next = matrix[i][--j];
            if (next === undefined) {
                break;
            }
            while (next !== undefined) {
                ans.push(next);
                matrix[i][j] = undefined;
                if (--j >= 0) {
                    next = matrix[i][j];
                } else {
                    break;
                }
            }
            j++;
            direct = 3;
        } else if (direct === 3) {
            next = matrix[--i][j];
            if (next === undefined) {
                break;
            }
            while (next !== undefined) {
                ans.push(next);
                matrix[i][j] = undefined;
                if (--i >= 0) {
                    next = matrix[i][j];
                } else {
                    break;
                }
            }
            i++;
            direct = 0;
        }
    }

    return ans;
};
// @lc code=end

