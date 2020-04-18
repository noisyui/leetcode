/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    let bits = [];
    let len = 32;
    while (len) {
        bits.push(n & 1);
        n >>>= 1;
        len--;
    }

    let ans = 0;
    let factor = 1;
    while (bits.length) {
        let b = bits.pop();
        ans += b * factor;
        factor *= 2;
    }
    return ans;
};

reverseBits(964176192);
// @lc code=end

