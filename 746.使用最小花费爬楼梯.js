/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let f1 = 0;
    let f2 = 0;
    for (let i = cost.length - 1; i >= 0; i--) {
        let f0 = cost[i] + Math.min(f1, f2);
        f2 = f1;
        f1 = f0;
    }

    return Math.min(f1, f2);
};
// @lc code=end

