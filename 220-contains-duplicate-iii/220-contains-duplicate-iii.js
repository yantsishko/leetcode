/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    let result = false;
    
    for (let i = 0; i < nums.length; i += 1) {
        for (let j = 0; j < nums.length; j += 1) {
            if (i === j) continue;
            if (
                Math.abs(nums[i] - nums[j]) <= t
                && Math.abs( i - j) <= k
            ) {
                result = true;
            }
        }
    }
    
    return result;
};