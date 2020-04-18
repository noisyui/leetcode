/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s === '') {
        return true;
    }
    let leftParts = [];

    for(let i =0 ; i< s.length; i++ ) {
        let cur = s.charAt(i);
        if(cur === '(' || cur === '[' || cur === '{') {
            leftParts.push(cur);
        }

        if(cur === ')') {
            if(leftParts.pop() !== '(') {
                return false;
            }
        }
        if(cur === ']') {
            if(leftParts.pop() !== '[') {
                return false;
            }
        }
        if(cur === '}') {
            if(leftParts.pop() !== '{') {
                return false;
            }
        }
    }

    return !leftParts.length;
    
};
// @lc code=end

