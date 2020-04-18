/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    // if (!root) {
    //     return false;
    // }

    // sum -= root.val;
    // if (root.left === null && root.right === null) {
    //     return sum === 0;
    // }

    // return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);


    if(!root) {
        return false;
    }

    let nodeStack = [];
    let sumStack = [];
    nodeStack.push(root);
    sumStack.push(sum - root.val);
    while(nodeStack.length !== 0) {
        let node = nodeStack.pop();
        let sum = sumStack.pop();
        if(node.left === null && node.right === null && sum === 0) {
            return true;
        }

        if (node.left) {
            nodeStack.push(node.left);
            sumStack.push(sum - node.left.val);
        }
        if (node.right) {
            nodeStack.push(node.right);
            sumStack.push(sum - node.right.val);
        }
    }
    return false; 
};
// @lc code=end

