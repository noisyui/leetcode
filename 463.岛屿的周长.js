/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    let ans = 0;
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c]) {
                let sides = 4;
                if (r && grid[r - 1][c]) sides-=2
                if (c && grid[r][c - 1]) sides-=2;
                ans += sides;
            }
        }
    }

    return ans;
};
// @lc code=end

