/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let temp = { next: null };
    let result = temp;
    let overflow = 0;
    while (l1 || l2 || overflow) {
        let value1 = l1 ? l1.val : 0;
        let value2 = l2 ? l2.val : 0;
        let sum = value1 + value2 + overflow;
        if (sum > 9) {
            overflow = 1;
            sum = sum % 10;
        } else {
            overflow = 0;
        }
        temp.next = { val: sum, next: null };
        temp = temp.next;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    return result.next;
};
// @lc code=end

