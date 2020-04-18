/*
 * @lc app=leetcode.cn id=801 lang=javascript
 *
 * [801] 使序列递增的最小交换次数
 *
 * https://leetcode-cn.com/problems/minimum-swaps-to-make-sequences-increasing/description/
 *
 * algorithms
 * Medium (41.08%)
 * Likes:    173
 * Dislikes: 0
 * Total Accepted:    5.6K
 * Total Submissions: 13.8K
 * Testcase Example:  '[1,3,5,4]\n[1,2,3,7]'
 *
 * 我们有两个长度相等且不为空的整型数组 A 和 B 。
 * 
 * 我们可以交换 A[i] 和 B[i] 的元素。注意这两个元素在各自的序列中应该处于相同的位置。
 * 
 * 在交换过一些元素之后，数组 A 和 B 都应该是严格递增的（数组严格递增的条件仅为A[0] < A[1] < A[2] < ... <
 * A[A.length - 1]）。
 * 
 * 给定数组 A 和 B ，请返回使得两个数组均保持严格递增状态的最小交换次数。假设给定的输入总是有效的。
 * 
 * 
 * 示例:
 * 输入: A = [1,3,5,4], B = [1,2,3,7]
 * 输出: 1
 * 解释: 
 * 交换 A[3] 和 B[3] 后，两个数组如下:
 * A = [1, 3, 5, 7] ， B = [1, 2, 3, 4]
 * 两个数组均为严格递增的。
 * 
 * 注意:
 * 
 * 
 * A, B 两个数组的长度总是相等的，且长度的范围为 [1, 1000]。
 * A[i], B[i] 均为 [0, 2000]区间内的整数。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minSwap = function(A, B) {
    // 迭代之前的「循环不变式」相关的变量，对第一个元素来说：
    // 不换为 0，换为 1
    let notSwap = 0, swap = 1
    // 通过循环迭代，更新不变量
    for (let i = 1; i < A.length; i++) {
        // 当前元素与之前元素的数值关系
        let case1 = A[i - 1] < A[i] && B[i - 1] < B[i]
        let case2 = A[i - 1] < B[i] && B[i - 1] < A[i]
        if (case1 && case2) {
            // 依赖性为没有依赖，如下更新可以确保「循环不变式」
            notSwap = Math.min(swap, notSwap)
            swap = notSwap + 1
        } else if (case1) {
            // 依赖性为保持一致，如下更新可以确保「循环不变式」
            swap += 1
        } else if (case2) {
            // 依赖性为恰好相反，如下更新可以确保「循环不变式」
            [notSwap, swap] = [swap, notSwap + 1]
        } else {
            // 按照题意，每一次迭代的循环不变式都能得到正确维护，不能时表示此题无解
            throw Error("No Solution")
        }
    }
    // 循环终止：答案为两个「循环不变式」相关的变量中的较小值
    return Math.min(notSwap, swap)
};
// @lc code=end

