/*
 * @lc app=leetcode.cn id=451 lang=javascript
 *
 * [451] 根据字符出现频率排序
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let map = {};
    for (let c of s) {
        if (!map[c]) {
            map[c] = 1;
        } else {
            map[c]++;
        }
    }

    let res = '';
    let keys = Object.keys(map).sort((a, b) => map[b] - map[a]);
    for (let key of keys) {
        res += new Array(map[key] + 1).join(key);
    }
    return res;
};
// @lc code=end

