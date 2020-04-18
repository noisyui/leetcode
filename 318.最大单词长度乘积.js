/*
 * @lc app=leetcode.cn id=318 lang=javascript
 *
 * [318] 最大单词长度乘积
 *
 * https://leetcode-cn.com/problems/maximum-product-of-word-lengths/description/
 *
 * algorithms
 * Medium (66.27%)
 * Likes:    159
 * Dislikes: 0
 * Total Accepted:    14.6K
 * Total Submissions: 22K
 * Testcase Example:  '["abcw","baz","foo","bar","xtfn","abcdef"]'
 *
 * 给定一个字符串数组 words，找到 length(word[i]) * length(word[j])
 * 的最大值，并且这两个单词不含有公共字母。你可以认为每个单词只包含小写字母。如果不存在这样的两个单词，返回 0。
 * 
 * 示例 1:
 * 
 * 输入: ["abcw","baz","foo","bar","xtfn","abcdef"]
 * 输出: 16 
 * 解释: 这两个单词为 "abcw", "xtfn"。
 * 
 * 示例 2:
 * 
 * 输入: ["a","ab","abc","d","cd","bcd","abcd"]
 * 输出: 4 
 * 解释: 这两个单词为 "ab", "cd"。
 * 
 * 示例 3:
 * 
 * 输入: ["a","aa","aaa","aaaa"]
 * 输出: 0 
 * 解释: 不存在这样的两个单词。
 * 
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    let map = new Map();
    let bit_number = ch => ch.charCodeAt() - 'a'.charCodeAt();

    for (let word of words) {
        let mask = 0;
        for (let ch of word) {
            mask |= 1 << bit_number(ch);
        }
        let len = map.get(mask);
        map.set(mask, Math.max(len ? len : 0, word.length));
    }

    let ans = 0;
    let m = [...map.keys()];
    for (let i = 0; i < m.length - 1; i++) {
        for (let j = i + 1; j < m.length; j++) {
            let x = m[i], y = m[j];
            if ((x & y) === 0) {
                ans = Math.max(map.get(x) * map.get(y), ans);
            }
        }
    }

    return ans;


    // let purged = [];
    // for (const word of words) {
    //     let set = new Set([...word]);
    //     purged.push(set);
    // }

    // let ans = 0;
    // let len = words.length;
    // for (let i = 0; i < len - 1; i++) {
    //     for (let j = i + 1; j < len; j++) {
    //         let sumLen = purged[i].size + purged[j].size;
    //         let mergedLen = new Set([...purged[i], ...purged[j]]).size;
    //         if (mergedLen === sumLen) {
    //             let mult = words[i].length * words[j].length;
    //             ans = Math.max(ans, mult);
    //         }
    //     }
    // }
    // return ans;
};
// @lc code=end

