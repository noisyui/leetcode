/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
 */

// @lc code=start

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (!head || !head.next) return head;

    let dumb = new ListNode(0, head);
    let prev = dumb, curr = head;
    
    // handle the duplicated node start from head
    while(curr.next && curr.val === curr.next.val) {
        prev = prev.next;
        curr = curr.next;
        dumb = prev.next;
    }

    while (curr && curr.next) {
        if (curr.val !== curr.next.val) {
            prev = prev.next;
            curr = curr.next;
            continue;
        }

        while (curr.next && curr.val === curr.next.val) {
            curr.next = curr.next.next;
        }
        curr = curr.next;
        prev.next = curr;
    }

    return dumb.next;
};
// @lc code=end

