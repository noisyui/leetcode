/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let SIZE = 1690;
    let results = [1];
    let p2 = 0, p3 = 0, p5 = 0; 

    for(let i = 1; i < SIZE; i++) {
        let next2 = results[p2] * 2;
        let next3 = results[p3] * 3;
        let next5 = results[p5] * 5;

        let min = Math.min(next2, next3, next5);
        if(next2 === min) p2++;
        if(next3 === min) p3++;
        if(next5 === min) p5++;

        results.push(min);
    }

    return results[n - 1];
};
// @lc code=end

