/*
 * @lc app=leetcode.cn id=477 lang=typescript
 *
 * [477] 汉明距离总和
 */

// @lc code=start
function totalHammingDistance(nums: number[]): number {
    if (nums.length === 0) return 0;

    let ans = 0;
    let cnt = new Array(32).fill(0);

    for (let num of nums) {
        let i = 0;
        while (num) {
            if (num & 1) {
                cnt[i]++;
            }
            num >>= 1;
            i++;
        }
    }

    for (const c of cnt) {
        ans += c * (nums.length - c);
    }

    return ans;
};
// @lc code=end

