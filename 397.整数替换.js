/*
 * @lc app=leetcode.cn id=397 lang=javascript
 *
 * [397] 整数替换
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function (n) {
    let ans = 0;
    while (n != 1) {
        if((n & 1) === 0) n >>>= 1;
        else if((n & 2) === 0) n--;
        else if(n === 3) {ans+=2; break;}
        else n++;
        ans++;
    }
    return ans;

};

integerReplacement(8);
// @lc code=end

