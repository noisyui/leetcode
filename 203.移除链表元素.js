/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let temp = new ListNode(0);
    let dump = temp;
    temp.next = head;
    while(temp.next) {
        if(temp.next.val === val) temp.next = temp.next.next;
        else temp = temp.next;
    }
    return dump.next;
};
// @lc code=end

