/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
var findBottomLeftValue = function (root) {
    // record the left most value of each layer(root is layer 0)
    let leftMostOfLayer = [];
    // traverse from layer 0
    traverse(root, leftMostOfLayer, 0);
    // return the last layer's left most value
    return leftMostOfLayer[leftMostOfLayer.length - 1];
};

/**
 * 
 * @param {TreeNode} root 
 * @param {number[]} leftMost 
 * @param {number} layer 
 */
let traverse = (root, leftMost, layer) => {
    if (root) {
        // record the value
        leftMost[layer++] = root.val;
        // traverse from right to left
        traverse(root.right, leftMost, layer);
        traverse(root.left, leftMost, layer);
    }
}
// @lc code=end

