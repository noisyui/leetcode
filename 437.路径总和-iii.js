/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
    let countPath = function (root, sum) {
        if (!root) return 0;
        sum -= root.val;
        let result = sum ? 0 : 1;
        return result + countPath(root.left, sum) + countPath(root.right, sum);
    }

    if (!root) return 0;
    let result = countPath(root, sum);
    let a = pathSum(root.left, sum);
    let b = pathSum(root.right, sum);
    return result + a + b;
};
// @lc code=end

