/*
 * @lc app=leetcode.cn id=650 lang=javascript
 *
 * [650] 只有两个键的键盘
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function (n) {
    let copyPaste = 0;
    while (n % 2 === 0) {
        copyPaste++;
        n = n / 2;
    }

    let factors = [];
    getFactors(n, factors);
    let sum = 0;
    for (let fac of factors) {
        sum += fac;
    }
    return sum + 2 * copyPaste;
};

/**
 * for an odd number, e.g. 15, we can perfrom 3 + 5 = 8 operations: 1copy->2paste->1copy->4paste 
 * @param {number} n 
 * @param {number[]} factors 
 */
let getFactors = (n, factors) => {
    for (let i = 3; i <= n; i += 2) {
        if (n % i === 0) {
            factors.push(i);
            return getFactors(n / i, factors);
        }
    }
}

minSteps(15)
// @lc code=end

