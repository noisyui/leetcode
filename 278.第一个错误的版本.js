/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let l = 1, r = n;
        if(isBadVersion(l)) return l;

        let mid = Math.floor((l + r) / 2);
        while(r - l > 1) {
            if(isBadVersion(mid)) {
                r = mid;
                mid = Math.floor((l + r) / 2);
            } else {
                l = mid;
                mid = Math.floor((l + r) / 2);
            }
        }

        return r;
    };
};
// @lc code=end

