/*
 * @lc app=leetcode.cn id=869 lang=javascript
 *
 * [869] 重新排序得到 2 的幂
 *
 * https://leetcode-cn.com/problems/reordered-power-of-2/description/
 *
 * algorithms
 * Medium (52.87%)
 * Likes:    40
 * Dislikes: 0
 * Total Accepted:    5.2K
 * Total Submissions: 9.8K
 * Testcase Example:  '1'
 *
 * 给定正整数 N ，我们按任何顺序（包括原始顺序）将数字重新排序，注意其前导数字不能为零。
 * 
 * 如果我们可以通过上述方式得到 2 的幂，返回 true；否则，返回 false。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：1
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 输入：10
 * 输出：false
 * 
 * 
 * 示例 3：
 * 
 * 输入：16
 * 输出：true
 * 
 * 
 * 示例 4：
 * 
 * 输入：24
 * 输出：false
 * 
 * 
 * 示例 5：
 * 
 * 输入：46
 * 输出：true
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= N <= 10^9
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
    let countN = count(N);
    for (let i = 0; i < 31; i++) {
        if (arraysMatch(countN, count(1 << i)))
            return true;
    }
    return false;
};

var arraysMatch = function (arr1, arr2) {
    if (arr1 === arr2) return true;
    if (!arr1 || !arr2) return false;
    // Check if the arrays are the same length
    if (arr1.length !== arr2.length) return false;

    // Check if all items exist and are in the same order
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }

    // Otherwise, return true
    return true;
};

let count = num => {
    let output = new Array(10).fill(0);
    let sNumber = num.toString();
    for (const c of sNumber) {
        output[+c]++;
    }
    return output;
};
// @lc code=end

