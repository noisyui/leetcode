/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    let build = (inorder) => {
        if (!inorder.length) return null;
        let tmp = postorder.pop();
        let mid = inorder.indexOf(tmp);
        let root = new TreeNode(tmp);
        root.right = build(inorder.slice(mid + 1));
        root.left = build(inorder.slice(0, mid));
        return root;
    }
    return build(inorder);
};
// @lc code=end

