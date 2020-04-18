/*
 * @lc app=leetcode.cn id=744 lang=javascript
 *
 * [744] 寻找比目标字母大的最小字母
 */

// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    if (target.charCodeAt() >= letters.peek().charCodeAt()) return letters[0];

    let l = 0, u = letters.length - 1, mid;
    let tc = target.charCodeAt();
    while (l <= u) {
        mid = Math.floor((l + u) / 2);
        if(letters[mid].charCodeAt() <= tc) l = mid + 1;
        else u = mid - 1;
    }

    return letters[l];
};
// @lc code=end

