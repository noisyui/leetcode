/*
 * @lc app=leetcode.cn id=332 lang=javascript
 *
 * [332] 重新安排行程
 */

// @lc code=start
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
    let ans = [];
    if (!tickets || tickets.length === 0) return ans;

    for (let ticket of tickets) {
        let nbr = graph[ticket[0]];
        nbr.push(ticket[1]);
    }

    Object.values(graph).forEach(list => list.sort().reverse());

    let dfs = function (from) {
        let nbr = graph[from];
        while (nbr && nbr.length) {
            let to = nbr.pop();
            dfs(to);
        }
        ans.push(from);
    }

    /**
     * ["JFK", "LHR"], ["JFK", "SFO"], ["SFO", "JFK"]
     * @param {*} from 
     */
    let visit = function (from) {
        let stack = [from];
        while (stack.length) {
            let next = stack[stack.length - 1];
            let nbr = graph[next];
            if (nbr && nbr.length) {
                stack.push(nbr.pop());
            } else {
                ans.push(stack.pop());
            }
        }
    }

    // dfs('JFK');
    visit('JFK');
    return ans.reverse();
};

let graph = new Proxy({}, {
    get: function (object, property) {
        if (!object.hasOwnProperty(property)) {
            object[property] = [];
        }
        return object[property];
    }
});

findItinerary([["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]);
// @lc code=end

