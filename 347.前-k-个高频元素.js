/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let mapping = {};
    for (let num of nums) {
        if (!mapping[num]) mapping[num] = 0;
        mapping[num]++;
    }

    let set = new Set();
    for (let key of Object.keys(mapping)) {
        if (set.size < k) set.add(key);
        else {
            let minMapping = getMin(set, mapping);
            if (mapping[key] > minMapping.value) {
                set.delete(minMapping.key);
                set.add(key);
            }
        }
    }

    let ans = [];
    let values = set.values();
    for (let value of values) {
        ans.push(value);
    }

    return ans;
};

let getMin = function (set, mapping) {
    let res;
    let values = set.values();
    for (let value of values) {
        if(!res) {
            res = {key: value, value: mapping[value]}
        } else {
            if(mapping[value] < res.value) {
                res.key = value;
                res.value = mapping[value];
            }
        }

    }

    return res;
}
// @lc code=end

