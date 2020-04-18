/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    if (!root) {
        return;
    }

    let sortedNodes = [];
    sortNodes(root, sortedNodes);

    let header = sortedNodes.shift();
    header.left = null;
    while (sortedNodes.length) {
        header.right = sortedNodes.shift();
        header = header.right;
        header.left = null;
    }
};

let sortNodes = (root, result) => {
    if (!root) {
        return;
    }

    result.push(root);
    sortNodes(root.left, result);
    sortNodes(root.right, result);
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let getNodes = () => {
    let root = new TreeNode(1);
    let left1 = new TreeNode(2);
    let right1 = new TreeNode(3);
    let left2 = new TreeNode(4);

    root.left = left1;
    root.right = right1;
    left1.left = left2;

    return root;
}

// flatten(getNodes());
// @lc code=end

