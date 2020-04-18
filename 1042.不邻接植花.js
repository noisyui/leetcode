/*
 * @lc app=leetcode.cn id=1042 lang=javascript
 *
 * [1042] 不邻接植花
 */

// @lc code=start
/**
 * @param {number} N
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function (N, paths) {
    let answer = new Array(N).fill(0);
    let table = new Array(N + 1);
    for (let i = 1; i <= N; i++) {
        table[i] = [];
    }
    for (let path of paths) {
        table[path[0]].push(path[1]);
        table[path[1]].push(path[0]);
    }

    for (let i = 1; i <= N; i++) {
        let set = new Set([1, 2, 3, 4]);
        for (let j of table[i]) {
            set.delete(answer[j - 1]);
        }
        answer[i - 1] = set.values().next().value;
    }

    return answer;
};

gardenNoAdj(3, [[1, 2], [2, 3], [3, 1]]);
// @lc code=end

