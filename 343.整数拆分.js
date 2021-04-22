/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 *
 * https://leetcode-cn.com/problems/integer-break/description/
 *
 * algorithms
 * Medium (59.43%)
 * Likes:    493
 * Dislikes: 0
 * Total Accepted:    82.7K
 * Total Submissions: 138.9K
 * Testcase Example:  '2'
 *
 * 给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。
 * 
 * 示例 1:
 * 
 * 输入: 2
 * 输出: 1
 * 解释: 2 = 1 + 1, 1 × 1 = 1。
 * 
 * 示例 2:
 * 
 * 输入: 10
 * 输出: 36
 * 解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。
 * 
 * 说明: 你可以假设 n 不小于 2 且不大于 58。
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
    if (n === 2) return 1;
    if (n === 3) return 2;
    let ans;
    let exp = Math.floor(n / 3);
    let mod = n % 3;
    if (mod === 0) {
        ans = Math.pow(3, exp);
    } else if (mod === 1) {
        ans = Math.pow(3, exp - 1) * 4;
    } else if (mod === 2) {
        ans = Math.pow(3, exp) * 2;
    }
    return ans;
};
// @lc code=end

