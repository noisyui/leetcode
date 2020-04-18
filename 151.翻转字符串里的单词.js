/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    // return s.trim().split(/\s+/).reverse().join(' ');
    let left = 0;
    let right = s.length - 1;
    while (left <= right && s[left] === ' ') left++;
    while (left <= right && s[right] === ' ') right--;

    let word = '';
    let stack = [];
    while (left <= right) {
        if (s[left] !== ' ') {
            word += s[left];
        } else if (s[left] === ' ' && word.length) {
            stack.push(word);
            word = '';
        }
        left++;
    }

    stack.push(word);
    return stack.reverse().join(' ');
};
// @lc code=end

