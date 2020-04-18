/*
 * @lc app=leetcode.cn id=719 lang=java
 *
 * [719] 找出第 k 小的距离对
 */

// @lc code=start
import java.util.Arrays;
import java.util.PriorityQueue;
import java.util.Comparator;

// class Solution {
//     public int smallestDistancePair(int[] nums, int k) {
//         Arrays.sort(nums);
//         PriorityQueue<Node> heap = new PriorityQueue<>(nums.length,
//                 Comparator.<Node>comparingInt(node -> nums[node.nei] - nums[node.root]));
//         for (int i = 0; i + 1 < nums.length; ++i) {
//             heap.offer(new Node(i, i + 1));
//         }

//         Node node = null;
//         for (; k > 0; --k) {
//             node = heap.poll();
//             if (node.nei + 1 < nums.length) {
//                 heap.offer(new Node(node.root, node.nei + 1));
//             }
//         }
//         return nums[node.nei] - nums[node.root];
//     }
// }

// class Node {
//     int root;
//     int nei;

//     Node(int r, int n) {
//         root = r;
//         nei = n;
//     }
// }

class Solution {
    public int smallestDistancePair(int[] nums, int k) {
        Arrays.sort(nums);
        final int WIDTH = 2 * nums[nums.length - 1];

        //multiplicity[i] = number of nums[j] == nums[i] (j < i)
        int[] multiplicity = new int[nums.length];
        for (int i = 1; i < nums.length; ++i) {
            if (nums[i] == nums[i-1]) {
                multiplicity[i] = 1 + multiplicity[i - 1];
            }
        }

        //prefix[v] = number of values <= v
        int[] prefix = new int[WIDTH];
        int left = 0;
        for (int i = 0; i < WIDTH; ++i) {
            while (left < nums.length && nums[left] == i) left++;
            prefix[i] = left;
        }

        int lo = 0;
        int hi = nums[nums.length - 1] - nums[0];
        while (lo < hi) {
            int mi = (lo + hi) / 2;
            int count = 0;
            for (int i = 0; i < nums.length; ++i) {
                count += prefix[nums[i] + mi] - prefix[nums[i]] + multiplicity[i];
            }
            //count = number of pairs with distance <= mi
            if (count >= k) hi = mi;
            else lo = mi + 1;
        }
        return lo;
    }
}

// @lc code=end
