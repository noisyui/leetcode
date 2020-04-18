import java.util.HashMap;
import java.util.Map;

/*
 * @lc app=leetcode.cn id=567 lang=java
 *
 * [567] 字符串的排列
 */

// @lc code=start
class Solution {
    public static void main(String[] args) {
        new Solution().checkInclusion("ab", "eidbaooo");
    }

    // public boolean checkInclusion(String s1, String s2) {
    //     if(s1.length() > s2.length()) return false;
    //     HashMap<Integer, Integer> map1 = new HashMap<>();
    //     generateStats(s1, 0, s1.length(), map1);

    //     HashMap<Integer, Integer> map2 = new HashMap<>();
    //     generateStats(s2, 0, s1.length(), map2);
    //     if (isMatch(map1, map2))
    //         return true;
    //     for (int i = 1; i <= s2.length() - s1.length(); i++) {
    //         updateStats(s2.charAt(i - 1), s2.charAt(i + s1.length() - 1), map2);
    //         if (isMatch(map1, map2))
    //             return true;
    //     }
    //     return false;
    // }

    // public void generateStats(String s, int start, int end, Map<Integer, Integer> hashMap) {
    //     for (int i = start; i < end; i++) {
    //         Integer key = (int) s.charAt(i);
    //         Integer value = hashMap.get(key);
    //         if (value == null) {
    //             value = 1;
    //         } else {
    //             value++;
    //         }
    //         hashMap.put(key, value);
    //     }
    // }

    // public void updateStats(int remove, int add, Map<Integer, Integer> hashMap) {
    //     Integer value = hashMap.get(remove);
    //     hashMap.put(remove, --value);

    //     value = hashMap.get(add);
    //     if (value == null) {
    //         value = 1;
    //     } else {
    //         value++;
    //     }
    //     hashMap.put(add, value);
    // }

    // public boolean isMatch(Map<Integer, Integer> map1, Map<Integer, Integer> map2) {
    //     for (Map.Entry<Integer, Integer> entry : map1.entrySet()) {
    //         int key = entry.getKey();
    //         int value = entry.getValue();
    //         Integer value2 = map2.get(key);
    //         if(value2 == null) {
    //             value2 = 0;
    //         }
    //         if (value2 != value)
    //             return false;
    //     }
    //     return true;
    // }

    public boolean checkInclusion(String s1, String s2) {
        int s1_len = s1.length(), s2_len = s2.length();
        if (s1_len > s2_len) return false;
        // save the number of each char
        int[] s1_ch = new int[26], s2_ch = new int[26];

        // initialize the window, with size of s1_len
        for (int i = 0; i < s1_len; ++i) {
            ++s1_ch[s1.charAt(i) - 'a'];
            ++s2_ch[s2.charAt(i) - 'a'];
        }

        // slide the window
        for (int i = s1_len; i < s2_len; ++i) {
            if (isEqual(s1_ch, s2_ch)) return true;
            --s2_ch[s2.charAt(i - s1_len) - 'a'];
            ++s2_ch[s2.charAt(i) - 'a'];
        }
        return isEqual(s1_ch, s2_ch);
    }

    private boolean isEqual(int[] s1_ch, int[] s2_ch) {
        for (int i = 0; i < 26; ++i)
            if (s1_ch[i] != s2_ch[i])
                return false;
        return true;
    }

}

// @lc code=end
