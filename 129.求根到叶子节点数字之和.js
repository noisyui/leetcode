/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根到叶子节点数字之和
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
var sumNumbers = function(root) {
    let helper = function(node, curVal) {
        if(!node) return 0;
        let temp = curVal * 10 + node.val;
        if(!node.left && !node.right) return temp;
        return helper(node.left, temp) + helper(node.right, temp);
    }

    return helper(root, 0);
};
// @lc code=end

