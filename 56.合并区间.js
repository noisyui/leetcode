/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length === 0) {
        return [];
    }
    intervals.sort((inter1, inter2) => inter1[0] - inter2[0]);
    let merged = [intervals[0]];
    for(let i = 1; i< intervals.length; i++) {
        if(intervals[i][0] <= merged[merged.length - 1][1]) {
            merged[merged.length - 1][1] = Math.max(intervals[i][1], merged[merged.length - 1][1]);
        } else {
            merged.push(intervals[i]);
        }
    }
    return merged;
};

// merge([[1,3],[2,6],[8,10],[15,18]]);
// @lc code=end

