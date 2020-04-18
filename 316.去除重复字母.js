/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 */

// @lc code=start
Array.prototype.peek = function () {
    return this.length ? this[this.length - 1] : undefined;
};

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
    let num = {};
    for (let ch of s) {
        num[ch] = num[ch] ? num[ch] + 1 : 1;
    }

    let set = new Set();
    let stack = [];

    for (let char of s) {
        if (!set.has(char)) {
            while (stack.length) {
                let top = stack.peek();
                if (top.charCodeAt() > char.charCodeAt() && num[top]) {
                    stack.pop();
                    set.delete(top)
                } else {
                    break;
                }
            }
            stack.push(char);
            set.add(char);
        }
        num[char]--;
    }

    return stack.join('');
};

// @lc code=end

