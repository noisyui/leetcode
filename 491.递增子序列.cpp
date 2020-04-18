/*
 * @lc app=leetcode.cn id=491 lang=cpp
 *
 * [491] 递增子序列
 */

#include <vector>
#include <unordered_set>

using namespace std;

// @lc code=start
class Solution {
public:
    vector<vector<int>> ans;
    vector<int> temp;
    unordered_set<int> s;
    int n;

    vector<vector<int>> findSubsequences(vector<int> &nums)
    {
        n = nums.size();
        for (int i = 0; i < (1 << n); i++)
        {
            findSubsequences(i, nums);
            int hashValue = getHash(263, int(1E9) + 7);
            if (check() && !s.count(hashValue))
            {
                ans.push_back(temp);
                s.insert(hashValue);
            }
        }
        return ans;
    }

    bool check()
    {
        for (size_t i = 1; i < temp.size(); i++)
        {
            if (temp[i] < temp[i - 1])
            {
                return false;
            }
        }

        return temp.size() >= 2;
    }

    int getHash(int base, int mod)
    {
        int hashValue = 0;
        for (const auto &x : temp)
        {
            hashValue = (1LL * hashValue * base + x + 101) % mod;
        }
        return hashValue;
    }

    void findSubsequences(int mask, vector<int> &nums)
    {
        temp.clear();
        for (size_t i = 0; i < n; i++)
        {
            if (mask & 1)
            {
                temp.push_back(nums[i]);
            }
            mask >>= 1;
        }
    }
};
// @lc code=end

