/*
 * @lc app=leetcode.cn id=672 lang=javascript
 *
 * [672] 灯泡开关 Ⅱ
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var flipLights = function (n, m) {
    if (n === 0 || m === 0) return 1; // the original state, no change
    if (n === 1) return 2; // on and off
    if (n === 2) {
        if(m === 1) return 3; // the case of odd and 3k + 1 have the same effect, and we cannot switch back
        return 4; // we can switch back to original state
    } else { // from here the 3k + 1 and odd case will be different, because the odd will change more than 1
        if(m === 1) return 4; // apply one single operations in the 4
        if(m === 2) return 7; // we can not apply the 3k + 1 operation exclusively, this case will not happen when there are 2 operations
        return 8; // no matter how many lamps and how many operations, there at most 8 possible resuts
    }
};
// @lc code=end

