/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    if(!headA || !headB) {
        return null;
    }
    let pA = headA;
    let pB = headB;
    let switchTime = 0;

    while (pA !== pB && switchTime < 3) {
        if (pA.next !== null) {
            pA = pA.next;
        } else {
            pA = headB;
            switchTime++;
        }
        if (pB.next !== null) {
            pB = pB.next;
        } else {
            pB = headA;
            switchTime++;
        }
    }
    if (switchTime >= 3) {
        return null;
    }
    return pA;
};
// @lc code=end

