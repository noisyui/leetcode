/*
 * @lc app=leetcode.cn id=949 lang=javascript
 *
 * [949] 给定数字能组成的最大时间
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function (A) {
    let ans = -1;

    // Choose different indices i, j, k, l as a permutation of 0, 1, 2, 3
    for (let i = 0; i < 4; ++i)
        for (let j = 0; j < 4; ++j)
            if (j != i)
                for (let k = 0; k < 4; ++k)
                    if (k != i && k != j) {
                        let l = 6 - i - j - k;

                        // For each permutation of A[i], read out the time and
                        // record the largest legal time.
                        let hours = 10 * A[i] + A[j];
                        let mins = 10 * A[k] + A[l];
                        if (hours < 24 && mins < 60)
                            ans = Math.max(ans, hours * 60 + mins);
                    }
    if (ans >= 0) {
        let hour = Math.floor(ans / 60);
        let minute = ans % 60;
        hour = hour < 10 ? '0' + hour : hour;
        minute = minute < 10 ? '0' + minute : minute;
        return hour + ':' + minute;
    }
    return '';
};
// @lc code=end

