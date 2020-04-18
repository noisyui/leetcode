/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    if (!head || !head.next || left === right) return head;

    let dumb = new ListNode(0, head);
    let before = dumb;
    for (let i = 0; i < left - 1; i++) {
        before = before.next;
    }
    let prev = before.next;
    let curr = prev.next;
    let nxt = curr.next;
    let count = right - left;
    while (count) {
        curr.next = prev;
        prev = curr;
        curr = nxt;
        if (nxt) nxt = nxt.next;
        count--;
    }

    before.next.next = curr;
    before.next = prev;
    return dumb.next;
};

let head = new ListNode(1, { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } });
reverseBetween(head, 2, 4);

// @lc code=end

