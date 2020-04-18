/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let cur = -1;
    let hasN = false;
    for (let i = 0; i < nums.length;) {
        if (cur !== -1) {
            if (cur === nums.length) {
                hasN = true;
                i++;
                cur = -1;
            } else {
                if (nums[cur] !== cur) {
                    let temp = nums[cur];
                    nums[cur] = cur;
                    cur = temp;
                } else {
                    cur = -1;
                    i++;
                }
            }
        } else {
            let num = nums[i];
            if (num === nums.length) {
                hasN = true;
                i++;
                cur = -1;
            } else {
                if (num !== i) {
                    cur = nums[num];
                    nums[num] = num;
                } else {
                    cur = -1;
                    i++;
                }
            }
        }
    }

    if (!hasN) {
        return nums.length;
    }

    let i = 0;
    while (nums[i] === i) {
        i++;
    }
    return i;
};

missingNumber([9,6,4,2,3,5,7,0,1]);
// @lc code=end

