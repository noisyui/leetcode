/*
 * @lc app=leetcode.cn id=424 lang=javascript
 *
 * [424] 替换后的最长重复字符
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let left = 0, right = 0, maxn = 0;
    let num = {};

    while (right < s.length) {
        let r = s[right];
        if(num[r] === undefined) num[r] = 0;
        num[r]++;
        maxn = Math.max(maxn, num[r]);

        if (right - left + 1 - maxn > k) {
            let l = s[left];
            num[l]--;
            left++;
        }
        right++;
    }

    return right - left;
};
// @lc code=end

