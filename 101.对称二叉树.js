/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    return root ? isMirror(root.left, root.right) : true;
};

let isMirror = function (left, right) {
    if (left && right) {
        if (left.val !== right.val) {
            return false;
        }
        return isMirror(left.left, right.right) && isMirror(left.right, right.left);
    } else if (!left && !right) {
        return true;
    } else {
        return false;
    }
}

// @lc code=end

