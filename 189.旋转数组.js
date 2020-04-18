/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    let N = nums.length;
    let K = k % N;
    if (K === 0) return;

    let moves = 0;
    let temp;
    for (let i = 0; moves < N; i++) {
        let j = (i + K) % N;
        temp = nums[i];
        while (true) {
            let swap = nums[j];
            nums[j] = temp;
            moves++;
            if (j % N === i) {
                break;
            }
            j = (j + K) % N;
            temp = swap;
        }
    }

};
// @lc code=end

