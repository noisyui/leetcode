/*
 * @lc app=leetcode.cn id=210 lang=javascript
 *
 * [210] 课程表 II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let inDegree = new Array(numCourses).fill(0);
    let deps = [];
    for (let p of prerequisites) {
        inDegree[p[0]]++;
        if (!deps[p[1]]) {
            deps[p[1]] = [];
        }
        deps[p[1]].push(p[0]);
    }

    let queue = [];
    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    let result = [];
    while (queue.length) {
        let course = queue.pop();
        result.push(course);
        if (deps[course]) {
            for (let c of deps[course]) {
                inDegree[c]--;
                if (inDegree[c] === 0) {
                    queue.push(c);
                }
            }
        }
    }

    return result.length === numCourses ? result : [];
};
// @lc code=end

