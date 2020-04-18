/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if(strs.length === 0) return '';
    let ans = strs[0];
    for(let str of strs) {
        if(str.length < ans.length) ans = str;
    }
    let end = ans.length;
    for (let str of strs) {
        for (let i = 0; i < ans.length; i++) {
            if(i >= end) break;
            if (str[i] !== ans[i]) {
                end = i;
                break;
            }
        }
    }

    return ans.slice(0, end);
};
// @lc code=end

