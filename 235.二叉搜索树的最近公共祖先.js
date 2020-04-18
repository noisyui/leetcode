/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    // if (p.val < root.val && q.val < root.val) {
    //     return lowestCommonAncestor(root.left, p, q);
    // } else if (p.val > root.val && q.val > root.val) {
    //     return lowestCommonAncestor(root.right, p, q);
    // } else {
    //     return root;
    // }
    let pVal = p.val;
    let qVal = q.val;
    while (root) {
        let rootVal = root.val;
        if (pVal < rootVal && qVal < rootVal) {
            root = root.left;
        } else if (pVal > rootVal && qVal > rootVal) {
            root = root.right;
        } else {
            return root;
        }
    }

    return null;
};
// @lc code=end

