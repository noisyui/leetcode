/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    // nums = [-1, 0, 1, 2, -1, -4];
    let result = [];
    if (!Array.isArray(nums) || nums.length < 3) {
        return result;
    }
    nums.sort((a, b) => a - b);
    if (nums[0] > 0 || nums[nums.length - 1] < 0) {
        return result;
    }
    // let begin = 0;

    // for (; nums[begin] <= 0;) {
    //     if (begin > 0 && nums[begin] == nums[begin - 1]) {
    //         begin++;
    //         continue;
    //     }
    //     let end = nums.length - 1;
    //     for (; nums[end] >= 0 && begin !== end;) {
    //         let twoSum = nums[begin] + nums[end];
    //         if (twoSum <= 0 && -twoSum <= nums[end]) {
    //             for (let i = end - 1; i > begin && nums[i] + twoSum >= 0; i--) {
    //                 if (nums[i] + twoSum === 0) {
    //                     let candidate = [nums[begin], nums[i], nums[end]];
    //                     checkCandidate(result, candidate);
    //                 }
    //             }
    //         } else if (twoSum > 0 && -twoSum >= nums[begin]) {
    //             for (let i = begin + 1; i < end && nums[i] + twoSum <= 0; i++) {
    //                 if (nums[i] + twoSum === 0) {
    //                     let candidate = [nums[begin], nums[i], nums[end]];
    //                     checkCandidate(result, candidate);
    //                 }
    //             }
    //         } 
    //         end--;
    //     }

    //     begin++;
    // }

    for (let now = 0; nums[now] <= 0; now++) {
        if (now > 0 && nums[now] === nums[now - 1]) {
            continue;
        }
        let low = now + 1;
        let high = nums.length - 1;
        while (low < high) {
            let sum = nums[now] + nums[low] + nums[high];
            if (sum > 0) {
                high--;
            } else if (sum < 0) {
                low++;
            } else {
                result.push([nums[now], nums[low], nums[high]]);
                do {
                    low++;
                } while (nums[low - 1] === nums[low]);
                do {
                    high--;
                } while (nums[high + 1] === nums[high]);
            }
        }
    }

    return result;
};

// let checkCandidate = (result, candidate) => {
//     for (item of result) {
//         if (item[0] === candidate[0]
//             && item[1] === candidate[1]
//             && item[2] === candidate[2]) {
//             return;
//         }
//     }

//     result.push(candidate);
// };

// threeSum([]);
// @lc code=end

