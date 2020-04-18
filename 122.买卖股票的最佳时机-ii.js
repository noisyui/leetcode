/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxProfit = 0;
    let profit = 0;
    for (let p = 1; p < prices.length; p++) {
        profit = prices[p] - prices[p - 1];
        if (profit > 0) {
            maxProfit += profit;
        }
    }

    return maxProfit;
};
// @lc code=end

