/*
 * @lc app=leetcode.cn id=1008 lang=java
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
 */

import java.util.Deque;
import java.util.ArrayDeque;

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode() {
    }

    TreeNode(int val) {
        this.val = val;
    }

    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public TreeNode bstFromPreorder(int[] preorder) {
        int len = preorder.length;
        if (len == 0) {
            return null;
        }

        TreeNode root = new TreeNode(preorder[0]);
        Deque<TreeNode> stack = new ArrayDeque<>();
        stack.push(root);

        for (int i = 1; i < len; i++) {
            TreeNode node = stack.peek();
            TreeNode currentNode = new TreeNode(preorder[i]);

            while (!stack.isEmpty() && stack.peek().val < currentNode.val) {
                node = stack.pop();
            }

            if (currentNode.val < node.val) {
                node.left = currentNode;
            } else {
                node.right = currentNode;
            }
            stack.push(currentNode);
        }

        return root;
    }
}
// @lc code=end
