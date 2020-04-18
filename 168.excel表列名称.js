/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
    let results = '';
    let mapping = ['Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    while (n > 26) {
        let mod = n % 26;
        results = mapping[n % 26] + results;
        if (mod === 0) {
            n -= 26;
        }
        n = Math.trunc(n / 26);
    }
    results = mapping[n] + results;
    return results;
};
// @lc code=end

