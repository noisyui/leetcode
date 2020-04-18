/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n === 1) return '1';
    let results = ['1'];

    for (let i = 1; i < n; i++) {
        let curr = '';
        let str = results[i - 1];
        let start = 0;
        for (let j = 1; j < str.length; j++) {
            if (str[j] !== str[j - 1]) {
                curr += (j - start) + str[j - 1];
                start = j;
            }
        }
        curr += (str.length - start) + str[str.length - 1];
        results[i] = curr;
    }

    return results[n - 1];
};
// @lc code=end

