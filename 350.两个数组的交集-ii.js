/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let ans = [];
    let map = new Map();
    for (let num of nums1) {
        if (map.has(num)) {
            let count = map.get(num);
            map.set(num, count + 1);
        } else {
            map.set(num, 1);
        }
    }

    for (let num of nums2) {
        if (map.has(num)) {
            let count = map.get(num);
            if(count > 0) ans.push(num);
            map.set(num, count - 1);
        }
    }
        
    return ans;
};
// @lc code=end

