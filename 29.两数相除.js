/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 *
 * https://leetcode-cn.com/problems/divide-two-integers/description/
 *
 * algorithms
 * Medium (20.41%)
 * Likes:    552
 * Dislikes: 0
 * Total Accepted:    86.1K
 * Total Submissions: 421.8K
 * Testcase Example:  '10\n3'
 *
 * 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。
 * 
 * 返回被除数 dividend 除以除数 divisor 得到的商。
 * 
 * 整数除法的结果应当截去（truncate）其小数部分，例如：truncate(8.345) = 8 以及 truncate(-2.7335) =
 * -2
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: dividend = 10, divisor = 3
 * 输出: 3
 * 解释: 10/3 = truncate(3.33333..) = truncate(3) = 3
 * 
 * 示例 2:
 * 
 * 输入: dividend = 7, divisor = -3
 * 输出: -2
 * 解释: 7/-3 = truncate(-2.33333..) = -2
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 被除数和除数均为 32 位有符号整数。
 * 除数不为 0。
 * 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−2^31,  2^31 − 1]。本题中，如果除法结果溢出，则返回 2^31 − 1。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (dividend === 0) return 0;
    if (divisor === 1) return dividend;
    if (divisor === -1) {
        const INT_MIN = 1 << 31;
        if (dividend <= INT_MIN) {
            return 0x7FFFFFFF;
        }
        return -dividend;
    }
    if (dividend === divisor) return 1;
    if (dividend === -divisor) return -1;

    let positive = (dividend > 0) === (divisor > 0);
    if (dividend < 0) dividend = -dividend;
    if (divisor < 0) divisor = -divisor;

    if (dividend < divisor) return 0;

    let ans = 0;
    while (dividend >= divisor) {
        let divis = divisor, exp = -1;
        while (divis <= dividend && divis > 0) {
            divis <<= 1;
            exp++;
        }
        let factor = Math.pow(2, exp);
        ans += factor;
        dividend -= divisor * factor;
    }

    return positive ? ans : -ans;
};
// @lc code=end

