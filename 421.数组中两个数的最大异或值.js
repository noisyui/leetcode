/*
 * @lc app=leetcode.cn id=421 lang=javascript
 *
 * [421] 数组中两个数的最大异或值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function (nums) {
    let maxNum = 0;
    for (let num of nums) maxNum = Math.max(maxNum, num);
    // length of max number in a binary representation
    let L = maxNum.toString(2).length;

    let maxXor = 0, currXor;
    let prefixes = new Set();
    for (let i = L - 1; i >= 0; i--) {
        // go to the next bit by the left shift
        maxXor <<= 1;
        // set 1 in the smallest bit
        currXor = maxXor | 1;
        prefixes.clear();
        // compute all possible prefixes 
        // of length (L - i) in binary representation
        for (let num of nums) prefixes.add(num >> i);
        // Update maxXor, if two of these prefixes could result in currXor.
        // Check if p1^p2 == currXor, i.e. p1 == currXor^p2.
        for (let p of prefixes) {
            if (prefixes.has(currXor ^ p)) {
                maxXor = currXor;
                break;
            }
        }
    }

    return maxXor;
};
// @lc code=end

// console.log(findMaximumXOR([100, 10]));