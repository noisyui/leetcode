/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    return rserialize(root, '');
};

let rserialize = function (root, str) {
    if (!root) {
        str += 'null,';
    } else {
        str += `${root.val},`;
        // keep str = to get correct answer because str is not global
        str = rserialize(root.left, str);
        str = rserialize(root.right, str);
    }

    return str;
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    let vals = data.split(',');
    return rdeserialize(vals);
};

let rdeserialize = function (list) {
    if (list[0] === 'null') {
        list.shift();
        return null;
    }

    let root = new TreeNode(parseInt(list[0]));
    list.shift();
    root.left = rdeserialize(list);
    root.right = rdeserialize(list);
    return root;
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);

let str = serialize(root);
let original = deserialize(str);

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

