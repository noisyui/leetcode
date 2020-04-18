/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
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
    l1 = reverse(l1);
    l2 = reverse(l2);
    let carry = 0;
    let head;
    let l3;

    while (l1 || l2 || carry) {
        if (!head) {
            head = new ListNode(0);
            l3 = head;
        } else {
            l3.next = new ListNode(0);
            l3 = l3.next;
        }
        let value1 = l1 ? l1.val : 0;
        let value2 = l2 ? l2.val : 0;
        let sum = value1 + value2 + carry;
        l3.val = sum % 10;

        if (sum > 9) {
            carry = 1
        } else {
            carry = 0;
        }

        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }

    return reverse(head);
};

let reverse = (node) => {
    let head;
    let next = node.next;
    if (next) {
        head = reverse(next);
        next.next = node;
        node.next = null;
    } else {
        return node;
    }
    return head;

}
// @lc code=end

