/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
    let strs = str.split(' ');
    if(strs.length !== pattern.length) return false;
    let map = new Map();
    for (let i = 0; i < pattern.length; i++) {
        if(!map.has(pattern[i])) {
            map.set(pattern[i], strs[i]);
        } else if(map.get(pattern[i]) !== strs[i]) {
            return false;
        }
    }

    let set = new Set();
    for(let value of map.values()) {
        set.add(value);
    }
    return map.size === set.size; 
};
// @lc code=end

