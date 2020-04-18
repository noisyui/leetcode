/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let output = [];
    let res = [];

    for (let num of nums) {
        output.push(num);
    }
    backtrack(nums.length, output, res, 0);
    return res;
};

let backtrack = function (n, output, res, first) {
    if (first === n) res.push([...output]);
    for (let i = first; i < n; i++) {
        swap(output, i, first);
        backtrack(n, output, res, first + 1);
        swap(output, i, first);
    }
}

let swap = function (list, i, j) {
    let temp = list[i];
    list[i] = list[j];
    list[j] = temp;
}

permute([1, 2, 3]);
// @lc code=end

