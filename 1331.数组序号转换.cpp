/*
 * @lc app=leetcode.cn id=1331 lang=cpp
 *
 * [1331] 数组序号转换
 */

// @lc code=start

class Solution {
public:
    vector<int> arrayRankTransform(vector<int>& arr) {
        //这一题关键就是看你是否能够熟练掌握各种容器的使用
        int n=arr.size();
        map<int,vector<int>>ans;
        for(int i=0;i<n;i++){
            ans[arr[i]].push_back(i);//map具有自动去重的能力，这样map里面存重复的元素只会存
        }
        vector<int>res(n,0);
        int index=1;
        for(auto x:ans){
            for(auto y:x.second){
                res[y]=index;
            }
            index++;
        }
        return res;
    }
};
// @lc code=end

