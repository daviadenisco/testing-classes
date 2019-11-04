'use strict';

class Solution {
    primeFactors(num) {
        if (num === 1) {
            return [];
        } else if (num === 2) {
            return [2];
        } else if (num % 2 !== 0) {
            return [num];
        } else if (num % 2 === 0) {
            let x = num / 2;
            if (x > 2 && x % 2 === 0) {
                let y = x / 2;
                return [2, 2, y];
            } else {
                return [2, x];
            }
        }
    }
}

module.exports = Solution;