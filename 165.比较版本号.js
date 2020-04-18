/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    let v1 = version1.split('.');
    let v2 = version2.split('.');
    let vLong, vShort;
    if(v1.length < v2.length){
        vShort = v1;
        vLong = v2;
    } else {
        vShort = v2;
        vLong = v1;
    }

    for (let i = 0; i < vShort.length; i++) {
        let seg1 = v1[i];
        let seg2 = v2[i];
        let maxLength = Math.max(seg1.length, seg2.length);
        while (seg1.length < maxLength) {
            seg1 = '0' + seg1;
        }
        while (seg2.length < maxLength) {
            seg2 = '0' + seg2;
        }

        for (let j = 0; j < maxLength; j++) {
            if (seg1.charAt(j) === seg2.charAt(j)) {
                continue;
            }
            return Number(seg1.charAt(j)) > Number(seg2.charAt(j)) ? 1 : -1;
        }
    }

    if (v1.length === v2.length) {
        return 0;
    } else {
        for (let i = vShort.length; i < vLong.length; i++) {
            if(Number(vLong[i]) === 0) {
                continue;
            }

            return v1.length > v2.length ? 1 : -1;
        }
    }

    return 0;
};

// compareVersion('1.0', '1');
// @lc code=end

