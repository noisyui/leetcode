/*
 * @lc app=leetcode.cn id=1162 lang=javascript
 *
 * [1162] 地图分析
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function (grid) {
    let N = grid.length;

    let queue = [];
    // save all lands(1), from which we traverse to search the sea
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (grid[i][j] === 1) {
                queue.push([i, j]);
            }
        }
    }

    // if no land or sea return -1
    if (queue.length === 0 || queue.length === N * N) {
        return -1;
    }

    let distance = -1;
    // there are 4 directions to traverse
    let moves = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    // start bfs search
    while (queue.length) {
        distance++;
        // get length of current queue
        let n = queue.length;
        for (let i = 0; i < n; i++) {
            let node = queue.shift();
            // for each node in the queue, traverse all 4 directions to search sea
            for (let move of moves) {
                let r = node[0] + move[0];
                let c = node[1] + move[1];
                if (inArea(grid, r, c) && grid[r][c] === 0) {
                    // mark the sea as traversed
                    grid[r][c] = 2;
                    // traverse from the new sea
                    queue.push([r, c]);
                }
            }
        }
    }
    return distance;
};

// 判断坐标 (r, c) 是否在网格中
let inArea = function (grid, r, c) {
    return 0 <= r && r < grid.length
        && 0 <= c && c < grid[0].length;
}

maxDistance([[1,0,1],[0,0,0],[1,0,1]]);
// @lc code=end

