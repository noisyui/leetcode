/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
        // Initialize the counter and the second pointer.
        //
        let j = 1, count = 1;

        //
        // Start from the second element of the array and process
        // elements one by one.
        //
        for (let i = 1; i < nums.length; i++) {

            //
            // If the current element is a duplicate, increment the count.
            //
            if (nums[i] == nums[i - 1]) {

                count++;

            } else {

                //
                // Reset the count since we encountered a different element
                // than the previous one.
                //
                count = 1;
            }

            //
            // For a count <= 2, we copy the element over thus
            // overwriting the element at index "j" in the array
            //
            if (count <= 2) {
                nums[j++] = nums[i];
            }
        }
        return j;
};
// @lc code=end

