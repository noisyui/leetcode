#include <vector>
#include <map>
#include <set>
#include <iostream>

using namespace std;

/*
 * @lc app=leetcode.cn id=1331 lang=cpp
 *
 * [1331] 数组序号转换
 */

// @lc code=start

//这一题关键就是看你是否能够熟练掌握各种容器的使用
class Solution
{
public:
    // algorithm1: 直接通过map排序和去重
    vector<int> arrayRankTransform(vector<int> &arr)
    {
        int n = arr.size();
        map<int, vector<int>> ans;
        for (int i = 0; i < n; i++)
        {
            ans[arr[i]].push_back(i);
        }
        vector<int> res(n, 0);
        int index = 1;
        for (auto x : ans)
        {
            for (auto y : x.second)
            {
                res[y] = index;
            }
            index++;
        }
        return res;
    }

    // algorighm2: 先通过set排序和去重，map处理的是已经排过序的元素
    vector<int> _arrayRankTransform(vector<int> &arr)
    {
        set<int> tmp;
        map<int, int> ans;
        vector<int> res;
        for (auto v : arr) tmp.insert(v); //现在tmp内的元素都是有序的啦,而且还实现了去重的功能
        int index = 1;
        for (auto v : tmp) ans[v] = index++; //ans的第二个索引存放的是数据的顺序。
        for (auto v : arr) res.push_back(ans[v]);
        return res;
    }
};

int main()
{
    Solution s;
    vector<int> arr{40, 10, 20, 30};
    vector<int> &result = s.arrayRankTransform(arr);
    for (const int &word : result)
    {
        cout << word << " ";
    }
    cout << endl;
}

// @lc code=end