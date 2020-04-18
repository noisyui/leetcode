/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
var sumOfLeftLeaves = function (root) {
    if(!root) return 0;
    let sum = 0;
    let helper = function (root, isLeft) {
        if (isLeft && !root.left && !root.right) sum += root.val;
        if(root.left) helper(root.left, true);
        if(root.right) helper(root.right, false);
    };

    helper(root, false);
    return sum;
};
// @lc code=end

