/*
 * @lc app=leetcode.cn id=685 lang=javascript
 *
 * [685] 冗余连接 II
 *
 * https://leetcode-cn.com/problems/redundant-connection-ii/description/
 *
 * algorithms
 * Hard (44.00%)
 * Likes:    236
 * Dislikes: 0
 * Total Accepted:    17.9K
 * Total Submissions: 40.7K
 * Testcase Example:  '[[1,2],[1,3],[2,3]]'
 *
 * 在本问题中，有根树指满足以下条件的 有向
 * 图。该树只有一个根节点，所有其他节点都是该根节点的后继。该树除了根节点之外的每一个节点都有且只有一个父节点，而根节点没有父节点。
 * 
 * 输入一个有向图，该图由一个有着 n 个节点（节点值不重复，从 1 到 n）的树及一条附加的有向边构成。附加的边包含在 1 到 n
 * 中的两个不同顶点间，这条附加的边不属于树中已存在的边。
 * 
 * 结果图是一个以边组成的二维数组 edges 。 每个元素是一对 [ui, vi]，用以表示 有向 图中连接顶点 ui 和顶点 vi 的边，其中 ui 是
 * vi 的一个父节点。
 * 
 * 返回一条能删除的边，使得剩下的图是有 n 个节点的有根树。若有多个答案，返回最后出现在给定二维数组的答案。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：edges = [[1,2],[1,3],[2,3]]
 * 输出：[2,3]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：edges = [[1,2],[2,3],[3,4],[4,1],[1,5]]
 * 输出：[4,1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == edges.length
 * 3 
 * edges[i].length == 2
 * 1 i, vi 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantDirectedConnection = function (edges) {
    const nodesCount = edges.length;
    const parent = new Array(nodesCount + 1).fill(0).map((value, index) => index);
    const ancestor = new Array(nodesCount + 1).fill(0).map((value, index) => index);
    let conflict = 0, cycle = 0;

    for (let i = 0; i < nodesCount; i++) {
        const e = edges[i];
        if (parent[e[1]] !== e[1]) {
            conflict = i;
        } else {
            parent[e[1]] = e[0];
            const node1 = find(ancestor, e[0]);
            const node2 = find(ancestor, e[1]);
            if (node1 != node2) {
                ancestor[node1] = node2; // union
            } else {
                cycle = i;
            }
        }
    }

    if (!conflict) {
        return [...edges[cycle]];
    } else if (!cycle) {
        return [...edges[conflict]];
    } else {
        let conflictNode = edges[conflict][1];
        return [parent[conflictNode], conflictNode];
    }
};

let find = (ancestor, index) => {
    if (ancestor[index] !== index) {
        ancestor[index] = find(ancestor, ancestor[index]);
    }
    return ancestor[index];
};

// @lc code=end

