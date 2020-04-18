/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
    let results = [0, 1];
    for (let i = 2; i <= N; i++) {
        results[i] = results[i - 2] + results[i - 1];
    }

    return results[N];
};
// @lc code=end

