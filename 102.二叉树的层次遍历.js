/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
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
var levelOrder = function (root) {
    if(!root) return [];
    let ans = [];
    let queue = [];
    queue.push(root);
    while (queue.length) {
        let length = queue.length;
        let layer = []; 
        for (let i = 0; i < length; i++) {
            let node = queue.shift();
            layer.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }

        ans.push(layer);
    }

    return ans;
};
// @lc code=end

