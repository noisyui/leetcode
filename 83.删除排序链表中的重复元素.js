/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let temp = head;
    while(temp && temp.next) {
        if(temp.next.val === temp.val) {
            temp.next = temp.next.next;
        } else {
            temp = temp.next;
        }
    }

    return head;
};
// @lc code=end

