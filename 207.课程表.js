/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
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

    let count = 0;
    while (queue.length) {
        let course = queue.pop();
        count++;
        if (deps[course]) {
            for (let c of deps[course]) {
                inDegree[c]--;
                if (inDegree[c] === 0) {
                    queue.push(c);
                }
            }
        }
    }

    return count === numCourses;
};
// @lc code=end

