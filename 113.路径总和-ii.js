/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
 */

// @lc code=start

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    let ans = [];
    let path = [];

    /**
     * @param {TreeNode} root 
     * @param {number} sum 
     * @return {void}
     */
    let dfs = (root, sum) => {
        if (!root) return;
        sum -= root.val;
        path.push(root.val);
        if (root.left === null && root.right === null && sum === 0) {
            ans.push([...path]);
        }
        dfs(root.left, sum);
        dfs(root.right, sum);
        path.pop();
    };

    dfs(root, targetSum);
    return ans;
};
// @lc code=end
