/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
 * @return {number}
 */

let maxSum;

var maxPathSum = function(root) {
    maxSum = Number.MIN_SAFE_INTEGER;
    maxGain(root);
    return maxSum;
};

let maxGain = function(root) {
    if(!root) return 0;

    // if smaller than 0, we discard the subtree
    let leftGain = Math.max(maxGain(root.left), 0);
    let rightGain = Math.max(maxGain(root.right), 0);

    let sumOfNewPath = root.val + leftGain + rightGain;

    maxSum = Math.max(maxSum, sumOfNewPath);

    return root.val + Math.max(leftGain, rightGain);
}
// @lc code=end

