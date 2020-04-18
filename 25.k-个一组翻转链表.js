/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    if (k === 1) return head;

    let dummy = new ListNode(0);
    dummy.next = head;
    let pre = dummy;
    let end = dummy;

    while (end.next) {
        for (let i = 0; i < k && end; i++) end = end.next;
        // If end is null, we are at last group. No need to reverse the last group.
        if(!end) break;

        // the first node of current group
        let start = pre.next;
        // the first node of next group
        let next = end.next;

        // disconnect the list at position 'end' to revert only the current group
        end.next = null;
        pre.next = reverseList(start);
        start.next = next;

        // 'start' now is the last node in current group, which is also the previous node of next group
        // reset 'prev' and 'end' to the previous node of next group
        pre = start;
        end = start;
    }

    return dummy.next;
};

var reverseList = function (head) {
    let prev = null;
    let curr = head;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};
// @lc code=end

