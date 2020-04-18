/*
 * @lc app=leetcode.cn id=164 lang=javascript
 *
 * [164] 最大间距
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
    if (!nums || nums.length < 2) return 0;

    let min = nums[0], max = nums[0];

    for (let item of nums) {
        if (item < min) min = item;
        else if (item > max) max = item;
    }

    let range = max - min;
    let bucketSize = Math.max(Math.floor(range / (nums.length - 1)), 1);
    let bucketList = [];

    for (let item of nums) {
        let bucketIndex = Math.floor((item - min) / bucketSize);
        let bucket = bucketList[bucketIndex];
        if (bucket) {
            if (item > bucket.max) bucket.max = item;
            else if (item < bucket.min) bucket.min = item;
        } else {
            bucketList[bucketIndex] = new Bucket(item, item);
        }
    }

    let prevBucketMax = min, maxGap = 0;
    for (let i = 0; i < bucketList.length; i++) {
        if (!bucketList[i]) continue;
        maxGap = Math.max(maxGap, bucketList[i].min - prevBucketMax);
        prevBucketMax = bucketList[i].max;
    }

    return maxGap;
};

class Bucket {
    constructor(min, max) {
        this.min = min;
        this.max = max;
    }
}
// @lc code=end

