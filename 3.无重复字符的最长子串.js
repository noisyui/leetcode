/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (!s) return 0;
    return recursive(s, 0, 2, new Set());
};

let recursive = (s, start, targetLen, set) => {
    set.clear();
    let end = s.length - targetLen;
    for (let i = start; i <= end; i++) {
        for (let j = 0; j < targetLen; j++) {
            set.add(s[i + j]);
        }
        if (set.size === targetLen) {
            return recursive(s, i, targetLen + 1, set);
        } else {
            set.clear();
        }
    }

    return targetLen - 1;
}

lengthOfLongestSubstring('ckilbkd');
// @lc code=end

