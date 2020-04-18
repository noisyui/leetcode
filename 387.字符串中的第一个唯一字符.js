/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let stats = {};
    for (let c of s) {
        if (stats[c]) {
            stats[c]++;
        } else {
            stats[c] = 1;
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (stats[s[i]] === 1) {
            return i;
        }
    }

    return -1
};
// @lc code=end

