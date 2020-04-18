/*
 * @lc app=leetcode.cn id=405 lang=javascript
 *
 * [405] 数字转换为十六进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
    if(!num) return '0';
    let ans = '';

    while (num) {
        let digit = num & 0x0F;
        switch (digit) {
            case 0xa:
                digit = 'a';
                break;
            case 0xb:
                digit = 'b';
                break;
            case 0xc:
                digit = 'c';
                break;
            case 0xd:
                digit = 'd';
                break;
            case 0xe:
                digit = 'e';
                break;
            case 0xf:
                digit = 'f';
                break;
            default:
                break;
        }
        ans = digit + ans;
        num >>>= 4;
    }
    return ans;
};
// @lc code=end
