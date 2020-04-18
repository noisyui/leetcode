/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    // nums = [2,0,2,1,1,0];
    let low = 0;
    let high = nums.length - 1;
    let middle;
    while (low < high) {
        while (nums[low] === 0) {
            low++;
        }

        while (nums[high] === 2) {
            high--;
        }

        if (low < high) {
            if (nums[low] === 2) {
                nums[low] = nums[high];
                nums[high] = 2;
                high--;
            }
        }

        if (low < high) {
            if (nums[high] === 0) {
                nums[high] = nums[low];
                nums[low] = 0;
                low++;
            }
        }

        if (low < high) {
            if (nums[low] === 1 && nums[high] === 1) {
                let middle = low + 1;
                while (middle <= high) {
                    if (nums[middle] === 0) {
                        nums[middle] = nums[low];
                        nums[low] = 0;
                        low++;
                    } else if (nums[middle] === 2) {
                        nums[middle] = nums[high];
                        nums[high] = 2;
                        high--;
                    } else {
                        middle++;
                    }
                }

                if(middle > high) {
                    break;
                }
            }
        }
    }
};

// sortColors();
// @lc code=end

