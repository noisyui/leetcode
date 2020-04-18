/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let dumb = new ListNode(0, head);
    let prev = dumb;

    while (n > 1) {
        head = head.next;
        n--;
    }

    while (head.next) {
        head = head.next;
        prev = prev.next;
    }

    prev.next = prev.next.next;
    return dumb.next;
};
// @lc code=end

