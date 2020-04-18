/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let diff = x ^ y;
    let distance = 0;
    while(diff) {
        diff &= diff - 1;
        distance++;
    }
    return distance;
};
// @lc code=end

