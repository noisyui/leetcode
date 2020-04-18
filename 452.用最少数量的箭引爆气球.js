/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    if(points.length === 0) return 0;
    // sort by the left border of the ball
    points.sort((a, b) => a[1] - b[1]);
    let results = [points[0]];
    for (let i = 1; i < points.length; i++) {
        let last = results.length - 1;
        // check if the new ball overlap the last ball in the results
        if (points[i][0] > results[last][1]) {
            results.push(points[i]);
        } 
    }

    return results.length;
};

findMinArrowShots([[3,9],[7,12],[3,8],[6,8],[9,10],[2,9],[0,9],[3,9],[0,6],[2,8]]);
// @lc code=end

