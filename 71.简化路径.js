/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    path = path + '/';
    let name = '';
    let last = '';
    let names = [];
    for (let char of path) {
        switch (char) {
            case '/':
                if (last === '') { // we have valid folder name
                    if (name === '..') {
                        names.pop();
                    } else if (name === '.') {
                    } else if (name !== '') {
                        names.push(name);
                    }
                    name = '';
                }
                last = '/';
                break;
            default:
                name += char;
                if (last != '') {
                    last = '';
                }
                break;
        }
    }
    return '/' + names.join('/');
};

// @lc code=end

