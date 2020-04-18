/*
 * @lc app=leetcode.cn id=1392 lang=javascript
 *
 * [1392] 最长快乐前缀
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPrefix = function (s) {
    for (let offset = 1; offset < s.length; offset++) {
        for (let start = 0; s[start] === s[start + offset]; start++) {
            if (start + offset === s.length - 1) return s.substring(offset);
        }
    }
    return '';
};
// @lc code=end
