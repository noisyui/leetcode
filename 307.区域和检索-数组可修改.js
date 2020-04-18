/*
 * @lc app=leetcode.cn id=307 lang=javascript
 *
 * [307] 区域和检索 - 数组可修改
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    if (nums.length) {
        this.n = nums.length;
        this.tree = [];
        for (let i = 0; i < this.n; i++) {
            this.tree[i + this.n] = nums[i];
        }
        for (let i = this.n - 1; i > 0; i--) {
            this.tree[i] = this.tree[i * 2] + this.tree[i * 2 + 1];
        }
    }
};

/** 
 * @param {number} i 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (i, val) {
    i += this.n;
    this.tree[i] = val;
    while (i) {
        let left = i;
        let right = i;
        if (i % 2) left--;
        else right++;
        i = Math.floor(i / 2);
        this.tree[i] = this.tree[left] + this.tree[right];
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
    // get leaf with value 'i'
    i += this.n;
    // get leaf with value 'j'
    j += this.n;
    let sum = 0;
    while (i <= j) {
        if (i % 2 === 1) {
            sum += this.tree[i];
            i++;
        }
        if (j % 2 === 0) {
            sum += this.tree[j];
            j--;
        }
        i = Math.floor(i / 2);
        j = Math.floor(j / 2);
    }
    return sum;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */


let nums = [1, 3, 5];
var obj = new NumArray(nums)
let sum1 = obj.sumRange(0, 2);
obj.update(1, 2);
let sum2 = obj.sumRange(0, 2);
// @lc code=end

