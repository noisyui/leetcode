/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
 */

// @lc code=start

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
    let list = [];
    inorder(root, list);
    let swapped = findSwapped(list);
    recover(root, swapped[0], swapped[1], 2);
};

/**
 * @param {TreeNode} root 
 * @param {number[]} list 
 * @return {void}
 */
let inorder = (root, list) => {
    if (!root) return;
    inorder(root.left, list);
    list.push(root.val);
    inorder(root.right, list);
};

/**
 * @param {number[]} list 
 * @return {number[]}
 */
let findSwapped = (list) => {
    let x, y;
    for (let i = 1; i < list.length; i++) {
        if (list[i] < list[i - 1]) {
            y = list[i];
            if (x === undefined) {
                x = list[i - 1];
            } else {
                break;
            }
        }
    }
    return [x, y];
}

/**
 * 
 * @param {TreeNode} root 
 * @param {number} x 
 * @param {number} y 
 * @param {number} count 
 */
let recover = (root, x, y, count) => {
    if (!root) return;
    if (root.val === x || root.val === y) {
        root.val = root.val === y ? x : y;
        if (--count === 0) return;
    }
    recover(root.left, x, y, count);
    recover(root.right, x, y, count);
}
// @lc code=end

recoverTree(new TreeNode(3));