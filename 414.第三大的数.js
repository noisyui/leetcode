/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return nums[0] > nums[1] ? nums[0] : nums[1];
    let first = -Number.MAX_VALUE, second = -Number.MAX_VALUE, third = -Number.MAX_VALUE;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (num > third && (num !== first && num !== second)) {
            if (num > first) {
                third = second;
                second = first;
                first = num;
            } else if (num > second) {
                third = second;
                second = num;
            } else {
                third = num
            }
        }
    }

    if(third === -Number.MAX_VALUE) return first;
    return third;

};
// @lc code=end

