/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    let map = new Map();
    for (let c of s) {
        let num = map.get(c);
        if (num) {
            map.set(c, num + 1);
        } else {
            map.set(c, 1);
        }
    }

    for(let c of t){
        let num = map.get(c);
        if(num === undefined || (num - 1) < 0) return false;
        map.set(c, num - 1);
    }

    return true;
};
// @lc code=end

