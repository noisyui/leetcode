/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    // nums.sort((a, b) => b - a);
    // return nums[k - 1];

    this.nums = nums;
    let size = nums.length;
    // kth largest is (N - k)th smallest
    return quickselect(0, size - 1, size - k);
};

let swap = function (a, b) {
    let tmp = this.nums[a];
    this.nums[a] = this.nums[b];
    this.nums[b] = tmp;
}


let partition = function (left, right, pivot_index) {
    let pivot = this.nums[pivot_index];
    // 1. move pivot to end
    swap(pivot_index, right);
    let store_index = left;

    // 2. move all smaller elements to the left
    for (let i = left; i <= right; i++) {
        if (this.nums[i] < pivot) {
            swap(store_index, i);
            store_index++;
        }
    }

    // 3. move pivot to its final place
    swap(store_index, right);

    return store_index;
}

/**
 * Returns the k-th smallest element of list within left..right.
 */
let quickselect = function (left, right, k_smallest) {
    // If the list contains only one element,return that element
    if (left == right) return this.nums[left];

    // select a random pivot_index
    let pivot_index = left + Math.floor(Math.random() * (right - left));

    pivot_index = partition(left, right, pivot_index);

    // the pivot is on (N - k)th smallest position
    if (k_smallest == pivot_index) return this.nums[k_smallest];
    // go left side
    else if (k_smallest < pivot_index)
        return quickselect(left, pivot_index - 1, k_smallest);
    // go right side
    return quickselect(pivot_index + 1, right, k_smallest);
}

// @lc code=end

