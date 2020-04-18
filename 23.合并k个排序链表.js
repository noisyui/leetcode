/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(!lists || !lists.length) return null;
    let res = lists[0];
    for(let i = 1; i < lists.length; i++) {
        res = mergeTwoLists(res, lists[i]);
    }
    return res;
};

var mergeTwoLists = function (l1, l2) {
    let traverse = { next: null };
    let dest = traverse;
    while (true) {
        let temp = { val: null, next: null };
        if (l1 && l2) {
            if (l1.val < l2.val) {
                temp.val = l1.val;
                l1 = l1.next;
            } else {
                temp.val = l2.val;
                l2 = l2.next;
            }
        } else if (l1) {
            temp.val = l1.val;
            l1 = l1.next;
        } else if (l2) {
            temp.val = l2.val;
            l2 = l2.next;
        } else {
            break;
        }

        traverse.next = temp;
        traverse = traverse.next;
    }

    return dest.next;
};

let res = mergeKLists([]);
// @lc code=end

