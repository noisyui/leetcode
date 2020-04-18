/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function (root) {
    // The recursive version
    // let result = [];
    // if (root) {
    //     inorderHelper(root, result);
    // }
    // return result;

    // The iterative version 1
    // let res = [];
    // let stack = [];

    // let curr = root;
    // while (curr || stack.length) {
    //     while(curr) {
    //         stack.push(curr);
    //         curr = curr.left;
    //     }
    //     curr = stack.pop();
    //     res.push(curr.val);
    //     curr = curr.right;
    // }

    // return res;


    // The iterative version 2
    if (!root) return [];

    let res = [];
    let stack = [root];

    while (stack.length) {
        let node = stack.pop();
        if (node) {
            if (node.right) stack.push(node.right);
            stack.push(node);
            stack.push(null);
            if (node.left) stack.push(node.left);
        } else {
            res.push(stack.pop().val);
        }
    }

    return res;
};

let inorderHelper = function (root, res) {
    if (root.left) {
        inorderHelper(root.left, res);
    }
    res.push(root.val);
    if (root.right) {
        inorderHelper(root.right, res);
    }
}
// @lc code=end

