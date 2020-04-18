/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let calc = function (n) {
        let res = 0;
        while (n) {
            res += Math.pow(n % 10, 2);
            n = Math.floor(n / 10);
        }
        return res;
    }

    let set = new Set();
    let sumOfPow = n;
    while(sumOfPow !== 1 && !set.has(sumOfPow)) {
        set.add(sumOfPow);
        sumOfPow = calc(sumOfPow);
    }

    return sumOfPow === 1;
};

isHappy(19);
// @lc code=end

