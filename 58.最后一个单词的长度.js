/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = ' ' + s.trim();
    let curr = 0;
    for(let i = s.length - 1; i >= 0; i--) {
        if(s[i] !== ' ') curr++;
        else return curr;
    }

};
// @lc code=end

