/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let best = 10000000;
    let result;
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        let l = i + 1;
        let u = nums.length - 1;
        let expect = target - nums[i];

        while (u - l > 0) {
            let sum = nums[l] + nums[u];
            let diff = sum - expect;
            if (diff > 0) {
                u--;
            } else if (diff < 0) {
                l++;
            } else {
                return target;
            }
            if (Math.abs(diff) < best) {
                best = Math.abs(diff);
                result = sum + nums[i];
            }
        }
    }

    return result;
};
// @lc code=end

