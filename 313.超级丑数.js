/*
 * @lc app=leetcode.cn id=313 lang=javascript
 *
 * [313] 超级丑数
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function (n, primes) {
    let results = [1];
    let indexes = [];
    for (let i = 0; i < primes.length; i++) indexes.push(0);

    for (let i = 1; i < n; i++) {
        let nextNumbers = [];
        for (let j = 0; j < primes.length; j++) {
            nextNumbers.push(results[indexes[j]] * primes[j]);
        }

        let min = Math.min(...nextNumbers);

        for (let k = 0; k < primes.length; k++) {
            if (nextNumbers[k] === min) indexes[k]++;
        } 

        results.push(min);
    }

    return results[n - 1];
};

nthSuperUglyNumber(12, [2,7,13,19]);
// @lc code=end

