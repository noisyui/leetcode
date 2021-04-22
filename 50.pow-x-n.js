/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 *
 * https://leetcode-cn.com/problems/powx-n/description/
 *
 * algorithms
 * Medium (37.38%)
 * Likes:    635
 * Dislikes: 0
 * Total Accepted:    175.1K
 * Total Submissions: 467.7K
 * Testcase Example:  '2.00000\n10'
 *
 * 实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，x^n）。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：x = 2.00000, n = 10
 * 输出：1024.00000
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：x = 2.10000, n = 3
 * 输出：9.26100
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：x = 2.00000, n = -2
 * 输出：0.25000
 * 解释：2^-2 = 1/2^2 = 1/4 = 0.25
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * -100.0 
 * -2^31 
 * -10^4 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    /**
     * the recursive version
     */
    // let recursive = (x, n) => {
    //     if (n === 0) return 1;
    //     let y = quickMul(x, Math.floor(n / 2));
    //     return n % 2 ? y * y * x : y * y;
    // };

    /**
     * the iterative version
     */
    let iterative = (x, n) => {
        let ans = 1;
        let curr = x;

        while (n) {
            if (n & 1) {
                ans *= curr;
            }
            curr *= curr;
            n = Math.floor(n / 2);
        }

        return ans;
    };

    return n >= 0 ? iterative(x, n) : 1 / iterative(x, -n);
};
// @lc code=end
