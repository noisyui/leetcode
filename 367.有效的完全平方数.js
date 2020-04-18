/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    if (num === 1 || num === 4) return true;

    let l = 3, r = num;
    while(l <= r) {
        let mid = Math.floor((l + r) / 2);
        let pow = mid * mid;
        if(pow === num) return true;
        else if( pow < num ) l = mid + 1;
        else if( pow > num ) r = mid - 1;
    }
    return false;
};
// @lc code=end

