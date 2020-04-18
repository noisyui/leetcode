/*
 * @lc app=leetcode.cn id=939 lang=javascript
 *
 * [939] 最小面积矩形
 *
 * https://leetcode-cn.com/problems/minimum-area-rectangle/description/
 *
 * algorithms
 * Medium (44.11%)
 * Likes:    77
 * Dislikes: 0
 * Total Accepted:    4.4K
 * Total Submissions: 10K
 * Testcase Example:  '[[1,1],[1,3],[3,1],[3,3],[2,2]]'
 *
 * 给定在 xy 平面上的一组点，确定由这些点组成的矩形的最小面积，其中矩形的边平行于 x 轴和 y 轴。
 * 
 * 如果没有任何矩形，就返回 0。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：[[1,1],[1,3],[3,1],[3,3],[2,2]]
 * 输出：4
 * 
 * 
 * 示例 2：
 * 
 * 输入：[[1,1],[1,3],[3,1],[3,3],[4,1],[4,3]]
 * 输出：2
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= points.length <= 500
 * 0 <= points[i][0] <= 40000
 * 0 <= points[i][1] <= 40000
 * 所有的点都是不同的。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function(points) {
    let pointSet = new Set();

    let addHash = (x, y) => {
        pointSet.add(40001 * x + y);
    };

    let hasHash = (x, y) => {
        return pointSet.has(40001 * x + y);
    };

    let area = (i, j) => {
        return Math.abs(points[j][0] - points[i][0]) * Math.abs(points[j][1] - points[i][1]);
    };

    for (let point of points) {
        addHash(point[0], point[1]);
    }

    let ans = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            let x1 = points[i][0];
            let x2 = points[j][0];
            let y1 = points[i][1];
            let y2 = points[j][1];
            if (x1 !== x2 && y1 !== y2) {
                if (hasHash(x1, y2) && hasHash(x2, y1)) {
                    ans = Math.min(ans, area(i, j))
                }
            }
        }
    }

    return ans < Number.MAX_SAFE_INTEGER ? ans : 0;
};
// @lc code=end

