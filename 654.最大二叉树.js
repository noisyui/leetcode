/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
    return maxTree(nums, 0, nums.length);
};

/**
 * recursively construct node with max value in range [l, r)
 * @param {number[]} nums 
 * @param {number} l 
 * @param {number} r 
 */
let maxTree = (nums, l, r) => {
    if (l === r) return null;
    let index = maxIndex(nums, l, r);
    let root = new TreeNode(nums[index]);
    root.left = maxTree(nums, l, index);
    root.right = maxTree(nums, index + 1, r);
    return root;
}

/**
 * return the index of element has max value in the range of [l, r) 
 * @param {number[]} nums 
 * @param {number} l 
 * @param {number} r 
 */
let maxIndex = (nums, l, r) => {
    let index = l;
    for (let i = l + 1; i < r; i++) {
        if (nums[i] > nums[index]) {
            index = i;
        }
    }

    return index;
}

// @lc code=end

