/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    if (!s) return true;
    let temp = '';
    for (let i = 0; i < s.length; i++) {
        if (isLetterOrDigit(s[i])) {
            temp += s[i];
        }
    }
    temp = temp.toLowerCase();
    for (let i = 0, j = temp.length - 1; i <= j; i++, j--) {
        if (temp[i] !== temp[j]) return false;
    }

    return true;
};

let isLetterOrDigit = (c) => {
    return c.match(/[A-Za-z0-9]/);
}
// @lc code=end

