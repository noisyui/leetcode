/*
 * @lc app=leetcode.cn id=383 lang=java
 *
 * [383] 赎金信
 */

// @lc code=start
class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        if (magazine.length() < ransomNote.length())
            return false;

        int[] caps = new int[26];
        char[] charArray = ransomNote.toCharArray();
        for (char c : charArray) {
            int start = c - 'a';
            int index = magazine.indexOf(c, caps[start]);
            if (index == -1)
                return false;
            caps[start] = index + 1;
        }

        return true;

    }
}
// @lc code=end
