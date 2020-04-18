/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const EXCEPTIONS = { 'IV': 4, 'IX': 9, 'XL': 40, 'XC': 90, 'CD': 400, 'CM': 900 };
    const NORMALS = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
    let intNumber = 0;
    for (let i = 0; i < s.length;) {
        let twoDigit = s.slice(i, i + 2);
        if (EXCEPTIONS[twoDigit]) {
            intNumber += EXCEPTIONS[twoDigit];
            i += 2;
        } else {
            intNumber += NORMALS[s.charAt(i)];
            i += 1;
        }
    }

    return intNumber;
};
// @lc code=end

