/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let targets = { a: 1, A: 1, e: 1, E: 1, i: 1, I: 1, o: 1, O: 1, u: 1, U: 1 };
    if (s.length < 2) return s;
    let res = [];
    for (let c of s) {
        res.push(c);
    }
    let i = 0;
    let j = s.length - 1;
    while (true) {
        while (!targets[s[i]] && i < j) {
            i++;
        }
        while (!targets[s[j]] && i < j) {
            j--;
        }

        if (i < j) {
            let temp = res[i];
            res[i] = res[j];
            res[j] = temp;
            i++;
            j--;
        } else {
            break;
        }
    }

    return res.join('');
};

reverseVowels('hello');
// @lc code=end

