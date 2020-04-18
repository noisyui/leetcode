/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 *
 * https://leetcode-cn.com/problems/perfect-squares/description/
 *
 * algorithms
 * Medium (59.75%)
 * Likes:    831
 * Dislikes: 0
 * Total Accepted:    127.5K
 * Total Submissions: 212.3K
 * Testcase Example:  '12'
 *
 * 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。
 * 
 * 给你一个整数 n ，返回和为 n 的完全平方数的 最少数量 。
 * 
 * 完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11
 * 不是。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 12
 * 输出：3 
 * 解释：12 = 4 + 4 + 4
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 13
 * 输出：2
 * 解释：13 = 4 + 9
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    // return exhaustive(n);
    return dynamic(n);
};

let dynamic = n => {
    let dp = new Array(n + 1).fill(Number.MAX_VALUE);
    dp[0] = 0;
    let squares = [0];
    let root = Math.floor(Math.sqrt(n)) + 1;
    for (let i = 1; i < root; i++) {
        squares.push(i * i);
    }

    for (let i = 1; i <= n; i++) {
        for (let s = 1; s < root && squares[s] <= i; s++) {
            dp[i] = Math.min(dp[i], dp[i - squares[s]] + 1);
        }
    }

    return dp[n];
}

let exhaustive = n => {
    let squares = new Set();
    let root = Math.floor(Math.sqrt(n)) + 1;
    for (let i = 1; i < root; i++) {
        squares.add(i * i);
    }

    let minNumSquares = k => {
        // recursive solution
        //# bottom cases: find a square number
        if (squares.has(k)) return 1;
        let min_num = Number.MAX_VALUE;

        //# Find the minimal value among all possible solutions
        for (let square of squares) {
            if (k < square) break;
            let new_num = minNumSquares(k - square) + 1;
            min_num = Math.min(min_num, new_num);
        }
        return min_num;
    }

    return minNumSquares(n);
}
// @lc code=end

