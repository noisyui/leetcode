/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    let segments = [];
    let span = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '0') {
            if (span === 0) {
                return 0;
            } else if (span > 2) {
                segments.push(--span);
            }
            span = 0;
        } else if (+s[i] > 2) {
            if (span > 0) {
                if (!(+s[i - 1] === 2 && +s[i] > 6)) {
                    span++;
                    segments.push(span);
                } else if (span > 1) {
                    segments.push(span);
                }
                span = 0;
            }
        } else {
            span++;
        }
    }

    if (span > 1) {
        segments.push(span);
    }

    let numOfDecodeings = 1;
    for (let n of segments) {
        numOfDecodeings *= getFibN(n);
    }

    return numOfDecodeings;
};

let fibs = [1, 1, 2, 3, 5, 8, 13, 21, 34];
let getFibN = function (n) {
    let result = fibs[n];
    if (result) {
        return result;
    } else {
        // let fib = calculateFibN(n);
        let fib = getFibN(n - 1) + getFibN(n - 2);
        fibs[n] = fib;
        return fib;
    }
}

let calculateFibN = function (n) {
        let sqrt5 = Math.sqrt(5);
        let fibn = Math.pow((1 + sqrt5) / 2, n + 1) - Math.pow((1 - sqrt5) / 2, n + 1);
        return Math.round(fibn / sqrt5);
}

// numDecodings('4757562545844617494555774581341211511296816786586787755257741178599337186486723247528324612117156948');
// @lc code=end

