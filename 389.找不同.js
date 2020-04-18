/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    // let ans = t.charCodeAt(t.length - 1);
    // for(let i = 0; i < s.length; i++) {
    //     ans ^= s.charCodeAt(i);
    //     ans ^= t.charCodeAt(i);
    // }
    // return String.fromCharCode(ans);
    let ans = t.charCodeAt(t.length - 1);
    for(let i = 0; i < s.length; i++) {
        ans += t.charCodeAt(i);
        ans -= s.charCodeAt(i);
    }
    return String.fromCharCode(ans);
};
// @lc code=end

