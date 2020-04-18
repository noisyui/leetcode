/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false;

    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        let mapped = map.get(s[i]);
        if (mapped !== undefined && mapped !== t[i]) return false;
        map.set(s[i], t[i]);
    }

    let set = new Set();
    for(let value of map.values()) {
        set.add(value);
    }

    return map.size === set.size;
};
// @lc code=end

