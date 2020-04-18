/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    if (!root) return root;

    let leftMost = root;
    while (hasMoreLevel(leftMost)) {
        let head = leftMost;
        while (head) {
            let firstChildOfNext = getFirstChildOfNext(head);
            // 1
            if (head.left) {
                if (head.right) {
                    head.left.next = head.right;
                } else {
                    head.left.next = firstChildOfNext;
                }
            }
            // 2
            if (head.right) {
                head.right.next = firstChildOfNext;
            }
            head = head.next;
        }
        leftMost = getFirstChild(leftMost);
    }

    return root;
};

let getFirstChildOfNext = function (head) {
    head = head.next;
    return getFirstChild(head);
}

let hasMoreLevel = function (head) {
    return !!getFirstChild(head);
}

let getFirstChild = function (head) {
    while (head) {
        if (head.left) return head.left;
        if (head.right) return head.right;
        head = head.next;
    }
    return null;
}

// @lc code=end

