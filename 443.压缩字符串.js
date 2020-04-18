/*
 * @lc app=leetcode.cn id=443 lang=javascript
 *
 * [443] 压缩字符串
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let anchor = 0;
    let write = 0;

    for(let read = 0; read < chars.length; read++) {
        if(read + 1 === chars.length || chars[read + 1] !== chars[read]) {
            chars[write++] = chars[anchor];
            if(read > anchor) {
                let count = (read - anchor + 1) + '';
                for(let c of count) {
                    chars[write++] = c;
                }
            }
            anchor = read + 1;
        }
    }
    return write;
};
// @lc code=end

