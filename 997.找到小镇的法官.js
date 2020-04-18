/*
 * @lc app=leetcode.cn id=997 lang=javascript
 *
 * [997] 找到小镇的法官
 */

// @lc code=start
/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    let inDegs = new Array(N + 1).fill(0);
    let outDegs = new Array(N + 1).fill(0);

    for(let i = 0; i < trust.length; i++) {
        let pair = trust[i];
        inDegs[pair[1]]++;
        outDegs[pair[0]]++;
    }

    for(let i = 1; i <= N; i++) {
        if(inDegs[i] === N - 1 && outDegs[i] === 0) return i;
    }
    return -1;
};
// @lc code=end

