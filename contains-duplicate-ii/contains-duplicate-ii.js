/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] === undefined) {
            map[nums[i]] = i;
        }
        
        if (i - map[nums[i]] > 0 && i - map[nums[i]] <= k) {
            return true
        } else {
            map[nums[i]] = i;
        }
    }
    
    return false;
};