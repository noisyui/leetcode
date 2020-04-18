/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    /**************** 1.bfs **************/
    // if (!root) return [];
    // let ans = [];
    // let queue = [root];
    // while (queue.length) {
    //     let len = queue.length;
    //     ans.push(queue[len - 1].val);
    //     while (len--) {
    //         let node = queue.shift();
    //         if (node.left) queue.push(node.left);
    //         if (node.right) queue.push(node.right);
    //     }
    // }
    // return ans;

    /**************** 2.dfs **************/
    if (!root) return [];
    let ans = [];
    let dfs = (root, depth) => {
        if (!root) return;
        if (ans.length < depth) ans.push(root.val);
        dfs(root.right, depth + 1);
        dfs(root.left, depth + 1);
    }
    dfs(root, 1);
    return ans;
};
// @lc code=end

