/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let output = [];

    function backtrack(first, curr) {
        if (curr.length === k) {
            output.push([...curr]);
            return;
        }

        for (let i = first; i <= n - (k - curr.length) + 1; i++) {
            curr.push(i);
            backtrack(i + 1, curr)
            curr.pop(i);
        }
    }

    backtrack(1, []);
    return output;
};
// @lc code=end

