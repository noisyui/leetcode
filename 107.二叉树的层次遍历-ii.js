/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if(!root) return [];

    let result = [];
    let queue = [root];
    while(queue.length) {
        let len = queue.length;
        let layer = [];
        for(let i = 0; i < len; i++) {
            let node = queue.shift();
            layer.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        result.push(layer);
    }

    return result.reverse();
};
// @lc code=end

