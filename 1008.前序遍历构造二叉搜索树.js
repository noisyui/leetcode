/*
 * @lc app=leetcode.cn id=1008 lang=javascript
 *
 * [1008] 前序遍历构造二叉搜索树
 *
 * https://leetcode-cn.com/problems/construct-binary-search-tree-from-preorder-traversal/description/
 *
 * algorithms
 * Medium (73.01%)
 * Likes:    141
 * Dislikes: 0
 * Total Accepted:    13.2K
 * Total Submissions: 18.2K
 * Testcase Example:  '[8,5,1,7,10,12]'
 *
 * 返回与给定前序遍历 preorder 相匹配的二叉搜索树（binary search tree）的根结点。
 * 
 * (回想一下，二叉搜索树是二叉树的一种，其每个节点都满足以下规则，对于 node.left 的任何后代，值总 < node.val，而
 * node.right 的任何后代，值总 > node.val。此外，前序遍历首先显示节点 node 的值，然后遍历 node.left，接着遍历
 * node.right。）
 * 
 * 题目保证，对于给定的测试用例，总能找到满足要求的二叉搜索树。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：[8,5,1,7,10,12]
 * 输出：[8,5,10,1,7,null,12]
 * 
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= preorder.length <= 100
 * 1 <= preorder[i] <= 10^8
 * preorder 中的值互不相同
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
    if (!preorder || !preorder.length) return null;

    let recursive = (l, r) => {
        if(l >= r) return null;

        let root = new TreeNode(preorder[l]);
        if (r - l === 1) return root;

        let index = l + 1;
        for (let i = index + 1; i < r; i++) {
            if (preorder[i] > preorder[l] && preorder[i - 1] < preorder[l]) {
                index = i;
            }
        }

        if (index !== l + 1) {
            root.left = recursive(l + 1, index);
            root.right = recursive(index, r);
        } else {
            if (preorder[index] > preorder[l]) {
                root.right = recursive(index, r);
            } else {
                root.left = recursive(index, r);
            }
        }
        return root;
    };

    return recursive(0, preorder.length);

};
// @lc code=end

