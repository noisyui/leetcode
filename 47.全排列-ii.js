/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let output = [];
    let res = [];

    for (let num of nums) {
        output.push(num);
    }
    output.sort();
    backtrack(nums.length, output, res, 0);
    return res;
};

let backtrack = function (n, output, res, first) {
    if (first === n) res.push([...output]);
    for (let i = first; i < n; i++) {
        if (i < n - 1 && output[i] === output[i+1]) continue;
        if (i !== first && output[i] === output[first]) continue;
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

permuteUnique([2,2,1,1]);
// @lc code=end

