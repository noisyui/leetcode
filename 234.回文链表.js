/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let array = [];

    let temp = head;
    while (temp) {
        array.push(temp.val);
        temp = temp.next;
    }

    for (let i = 0, j = array.length - 1; i < j; i++, j--) {
        if (array[i] - array[j]) return false
    }
    return true;
};
// @lc code=end

