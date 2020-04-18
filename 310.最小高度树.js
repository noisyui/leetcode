/*
 * @lc app=leetcode.cn id=310 lang=javascript
 *
 * [310] 最小高度树
 */

// @lc code=start
/**
 * 判断构成边的节点是否包含叶子节点（入度为1），如果包含则舍弃这条边。当所有边都舍弃时，分析前一次得到的边的列表。
 * 该列表中的边都包含至少一个叶子节点，只有两种可能：
 *      1. 该列表包含一条边，即两个都是叶子节点：直接返回这条边（的两个节点）
 *      2. 该列表包含多条边，即多个叶子节点和一个根节点：返回唯一一个入度超过1的节点
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
    // check
    if (n === 1 || edges.length === 0) return [0];

    let root, len = edges.length, inDegs = new Array(n);
    do {
        // update length of edges
        edges.length = len;
        inDegs.fill(0);
        for (let edge of edges) {
            inDegs[edge[0]]++;
            inDegs[edge[1]]++;
        }

        len = 0;
        for (let edge of edges) {
            // overwrite the value of edges if the none of the edge's nodes is leaf
            if (inDegs[edge[0]] > 1 && inDegs[edge[1]] > 1) edges[len++] = edge;
            else if (inDegs[edge[0]] > 1) root = edge[0];
            else if (inDegs[edge[1]] > 1) root = edge[1];
        }
    } while (len) // when len is 0, the edges hold the previous values
    
    if (edges.length === 1) return edges[0]; // case 1
    return [root]; // case 2
};

findMinHeightTrees(6, [[3, 0], [3, 1], [3, 2], [3, 4], [5, 4]]);
// @lc code=end

