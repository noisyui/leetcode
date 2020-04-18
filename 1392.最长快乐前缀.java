/*
 * @lc app=leetcode.cn id=1392 lang=java
 *
 * [1392] 最长快乐前缀
 */

// @lc code=start
class Solution {
    public String longestPrefix(String s) {
        int n = s.length();
        long prefix = 0;
        long suffix = 0;
        long base = 31;
        long mul = 1;
        long mod = 1000000007;
        int happy = 0;

        for (int i = 1; i < n; i++) {
            prefix = (prefix * base + (s.charAt(i - 1) - 'a')) % mod;
            suffix = (suffix + (s.charAt(n - i) - 'a') * mul) % mod;
            if (prefix == suffix) {
                happy = i;
            }
            mul = mul * base % mod;
        }

        return s.substring(0, happy);
    }
}
// @lc code=end
