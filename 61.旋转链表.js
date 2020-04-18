/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 */

// @lc code=start

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (k === 0 || !head || head.next === null) return head;
    let temp = head;
    let len = 1;

    while (temp.next) {
        temp = temp.next
        len++;
    }

    let shift = k % len;
    if (shift === 0) return head;

    let tailIndex = len - shift;
    temp.next = head;
    while (tailIndex) {
        temp = temp.next;
        tailIndex--;
    }
    let res = temp.next;
    temp.next = null;

    return res;
};
// @lc code=end

