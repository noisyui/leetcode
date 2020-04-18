/*
 * @lc app=leetcode.cn id=491 lang=java
 *
 * [491] 递增子序列
 */

import java.util.ArrayList;
import java.util.List;

// @lc code=start
class Solution {
    List<List<Integer>> ans = new ArrayList<List<Integer>>();
    List<Integer> temp = new ArrayList<Integer>();

    public List<List<Integer>> findSubsequences(int[] nums) {
        dfs(0, Integer.MIN_VALUE, nums);
        return ans;
    }

    private void dfs(int curIndex, int lastNum, int[] nums) {
        if (curIndex == nums.length) {
            if (temp.size() >= 2) {
                ans.add(new ArrayList<Integer>(temp));
            }
            return;
        }

        // 1. If current number is bigger, choose or skip it
        // 2. If current number is equal, choose it
        // 3. If current number is smaller, skip it
        if (nums[curIndex] >= lastNum) {
            temp.add(nums[curIndex]);
            dfs(curIndex + 1, nums[curIndex], nums);
            temp.remove(temp.size() - 1);
        }
        if (nums[curIndex] != lastNum) {
            dfs(curIndex + 1, lastNum, nums);
        }
    }
}
// @lc code=end
