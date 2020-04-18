/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    const NUMBERS = { 0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9' };
    const INT_MIN = '-2147483648';
    const INT_MAX = '2147483647';

    let cleaned = str.trim();
    let resultString = '';

    for (let i = 0; i < cleaned.length; i++) {
        let char = cleaned.charAt(i);
        // check sign
        if (char === '-' || char === '+') {
            // if not the first sign
            if (resultString) {
                break;
            }
            // check the following number
            let number = cleaned.charAt(i + 1);
            if (NUMBERS[number]) {
                if (char === '-') {
                    resultString += '-';
                }
                resultString += number;
                i++;
                // continue to find
                continue;
            } else {
                break;
            }
        }

        // check first char excluding sign
        if (!NUMBERS[char]) {
            break;
        } else if ((resultString === '0' || resultString === '-0') && char === '0') {
            continue;
        } else {
            resultString += char;
        }
    }

    if (!resultString || resultString === '-') {
        return 0;
    }

    let maxLength;
    if (resultString.charAt(0) === '-') {
        maxLength = INT_MIN.length;
        if (resultString.length > maxLength) {
            resultString = INT_MIN;
        } else if (resultString.length === maxLength) {
            if (resultString > INT_MIN) {
                resultString = INT_MIN;
            }
        }
    } else {
        maxLength = INT_MAX.length;
        if (resultString.length > maxLength) {
            resultString = INT_MAX;
        } else if (resultString.length === maxLength) {
            if (resultString > INT_MAX) {
                resultString = INT_MAX;
            }
        }
    }

    let result = parseInt(resultString);
    return result;
};
// @lc code=end

