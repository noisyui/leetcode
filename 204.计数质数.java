/*
 * @lc app=leetcode.cn id=204 lang=java
 *
 * [204] 计数质数
 */

// @lc code=start

import java.util.Arrays;

class Solution {

    public int countPrimes(int n) {
        if (n < 3) {
            return 0;
        }
        int numberOfPrime = n - 2;
        boolean[] primeIndicator = new boolean[n];
        Arrays.fill(primeIndicator, true);

        int sqrt = (int)Math.sqrt(n) + 1;
        for (int i = 2; i <= sqrt; i++) {
            if (primeIndicator[i]) {
                for(int j = i * i; j < n; j+=i) {
                    if(primeIndicator[j]) {
                        primeIndicator[j] = false;
                        numberOfPrime--;
                    }
                }
            }
        }

        return numberOfPrime;
    }
}
// @lc code=end
