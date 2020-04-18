/*
 * @lc app=leetcode.cn id=720 lang=javascript
 *
 * [720] 词典中最长的单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
    words.sort((a, b) => a.length !== b.length ? b.length - a.length : a < b ? -1 : 1);
    let obj = {};
    words.forEach(word => obj[word] = 1);
    for(let word of words) {
        let match = true;
        for(let i = 1; i < word.length; i++) {
            let sub = word.substring(0, i);
            if(!obj[sub]) {
                match = false;
                break;
            }
        }

        if(match) {
            return word;
        }
    }

    return '';
};

// let a = ['a', 'b', 'ab'];
// longestWord(a);

// @lc code=end

