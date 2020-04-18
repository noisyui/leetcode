/*
 * @lc app=leetcode.cn id=299 lang=javascript
 *
 * [299] 猜数字游戏
 */

// @lc code=start
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
    let bull = 0, cow = 0;
    let bucket = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let len = secret.length;
    for (let i = 0; i < len; i++) {
        if (secret[i] === guess[i]) {
            bull++;
        } else {
            bucket[secret[i]]++;
            bucket[guess[i]]--;
        }
    }

    for (let b of bucket) {
        if (b > 0) cow += b;
    }

    cow = len - bull - cow;
    return bull + 'A' + cow + 'B';
};

getHint('1123', '0111');
// @lc code=end

