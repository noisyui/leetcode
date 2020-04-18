/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if (!root) return [];
    let ans = [];
    let queue = [];
    queue.push(root);
    let layerNo = 0;
    while (queue.length) {
        let length = queue.length;
        let leftFirst = layerNo % 2;
        for (let i = length - 1; i >= 0; i--) {
            let node = queue[i];
            if (leftFirst) {
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            } else {
                if (node.right) queue.push(node.right);
                if (node.left) queue.push(node.left);
            }
        }

        let layer = [];
        for (let i = 0; i < length; i++) {
            let first = queue.shift();
            layer.push(first.val);
        }
        ans.push(layer);
        layerNo++;
    }

    return ans;
};
// @lc code=end

