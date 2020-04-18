/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
 function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
    return buildTree(head, null);
};

/**
 * 
 * @param {ListNode} left 
 * @param {ListNode} right 
 * @return {TreeNode}
 */
let buildTree = (left, right) => {
    if(left === right) return null;
    let mid = getMedian(left, right);
    let root = new TreeNode(mid.val);
    root.left = buildTree(left, mid);
    root.right = buildTree(mid.next, right);
    return root;
};

/**
 * 
 * @param {ListNode} left 
 * @param {ListNode} right 
 * @return {ListNode}
 */
let getMedian = (left, right) => {
    let fast = left;
    let slow = left;
    while (fast !== right && fast.next !== right) {
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
};
// @lc code=end

