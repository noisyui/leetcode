/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if (!root) return [];

    let stack = [root];
    let ans = [];

    while (stack.length) {
        let root = stack.pop();
        ans.unshift(root.val);
        if (root.left) stack.push(root.left);
        if (root.right) stack.push(root.right);
    }

    return ans;
};
// @lc code=end

