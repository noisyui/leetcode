/*
 * @lc app=leetcode.cn id=133 lang=javascript
 *
 * [133] 克隆图
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    const visited = new Map();

    let clone = function (curNode) {
        if (curNode === null) {
            return curNode;
        }

        if(visited.has(curNode)) {
            return visited.get(curNode);
        }

        let cloneNode = new Node(curNode.val, []);
        visited.set(curNode, cloneNode);

        for (let nb of curNode.neighbors) {
            cloneNode.neighbors.push(clone(nb));
        }

        return cloneNode;
    }

    return clone(node);
};
// @lc code=end

