/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let theLongest = '';
    if (typeof s === 'string' && s.length > 0) {
        theLongest = s.charAt(0);
        for (let i = 0; i < s.length - 2; i++) {
            let even = getLongest(s, i, i + 1);
            let odd = getLongest(s, i, i + 2);

            if(even.length > theLongest.length) {
                theLongest = even;
            }
            if(odd.length > theLongest.length) {
                theLongest = odd;
            }
        }

        if (theLongest.length === 1) {
            if (s.charAt(s.length - 2) == s.charAt(s.length - 1)) {
                theLongest = s.slice(-2);
            }
        }
    }
    return theLongest;
};

let getLongest = (s, left, right) => {
    while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
        left -= 1;
        right += 1;
    }

    // handle case: ab
    if (right - left === 1) {
        return '';
    }
    return s.slice(left + 1, right);
}
// @lc code=end

