/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    if (a.length > b.length) {
        let temp = b;
        b = a;
        a = temp;
    }

    let i = a.length - 1;
    let j = b.length - 1;
    let result = [];
    let carry = 0;
    for (; j >= 0; j--, i--) {
        let aDigit;
        if(i < 0) aDigit = 0;
        else aDigit = Number.parseInt(a[i]);
        let sum = aDigit + Number.parseInt(b[j]) + carry;
        if (sum < 2) {
            result[j] = sum;
            carry = 0;
        } else {
            if(sum === 2) result[j] = 0;
            else result[j] = 1;
            carry = 1;
        }
    }

    let ans = result.join('');
    if(carry) ans = '1' + ans;
    return ans;
};

addBinary('11', '1');
// @lc code=end

