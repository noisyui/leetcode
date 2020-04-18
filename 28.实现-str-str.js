/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle === '') {
        return 0;
    }
    let delta = haystack.length - needle.length;
    for (let i = 0; i <= delta; i++) {
        let j = 0;
        for (; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                break;
            }
        }

        if (j === needle.length) {
            return i;
        }
    }

    return -1;
};
// @lc code=end

