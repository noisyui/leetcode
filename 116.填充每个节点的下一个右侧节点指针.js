/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start

// Definition for a Node.
function Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
};

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    if (!root) return root;

    let leftMost = root;
    while (leftMost.left) {
        let head = leftMost;
        while (head) {
            // 1
            head.left.next = head.right;
            // 2
            if(head.next) head.right.next = head.next.left;

            head = head.next;
        }

        leftMost = leftMost.left;
    }


    return root;
};
// @lc code=end

