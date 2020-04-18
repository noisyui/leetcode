/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    if (!head) return null;
    let temp = head;
    let map = new Map();
    while (temp) {
        let newHead = map.get(temp);
        if (!newHead) {
            newHead = new Node(temp.val, null, null);
            map.set(temp, newHead);
        }

        if (temp.random) {
            let newNode = map.get(temp.random);
            if (!newNode) {
                newNode = new Node(temp.random.val, null, null);
                map.set(temp.random, newNode);
            }
            newHead.random = newNode;
        }

        if (temp.next) {
            let newNode = map.get(temp.next);
            if (!newNode) {
                newNode = new Node(temp.next.val, null, null);
                map.set(temp.next, newNode);
            }
            newHead.next = newNode;
        }

        temp = temp.next;
    }

    return map.get(head);
}
// @lc code=end

