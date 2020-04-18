/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if(!root) return [];

    let dfs = function(root, path, pathList) {
        path.push(root.val);
        if(root.left) dfs(root.left, [...path], pathList);
        if(root.right) dfs(root.right, [...path], pathList);
        if(!root.left && !root.right) pathList.push(path.join('->'));
    }

    let pathList = [];
    dfs(root, [], pathList);
    return pathList;
};
// @lc code=end

