/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function (root) {
    // let ans = [];
    // let traverse = function (root) {
    //     if (root) {
    //         ans.push(root.val);
    //         traverse(root.left);
    //         traverse(root.right);
    //     }
    // }
    // traverse(root);
    // return ans;

    if (!root) return [];

    let stack = [root];
    let ans = [];

    while (stack.length) {
        let root = stack.pop();
        ans.push(root.val);
        if (root.right) stack.push(root.right);
        if (root.left) stack.push(root.left);
    }

    return ans;
};
// @lc code=end

