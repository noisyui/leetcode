/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let left = 0;
    let right = 0;

    let charInfo = {};
    let ansLeft = 0;
    let ansRight = s.length;

    let hasAnswer = false;

    let tInfo = {};
    for (let c of t) {
        if (!tInfo[c]) {
            tInfo[c] = 1;
        } else {
            tInfo[c]++;
        }
    }

    while (right < s.length) {
        if (!charInfo[s[right]]) {
            charInfo[s[right]] = 0;
        }
        charInfo[s[right]]++;
        if (tInfo[s[right]] && hasAll(charInfo, tInfo)) {
            hasAnswer = true;
            while (hasAll(charInfo, tInfo)) {
                --charInfo[s[left++]];
            }
            if (right - left < ansRight - ansLeft) {
                ansLeft = left;
                ansRight = right;
            }
        }
        right++;
    }
    return hasAnswer ? s.substring(ansLeft - 1, ansRight + 1) : '';
};

let hasAll = function (obj, tInfo) {
    for (let key of Object.keys(tInfo)) {
        if (!obj[key] || obj[key] < tInfo[key]) {
            return false;
        }
    }
    return true;
}

minWindow("cabefgecdaecf", "cae");
// @lc code=end