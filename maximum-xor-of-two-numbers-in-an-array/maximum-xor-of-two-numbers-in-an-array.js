/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
    if (nums.length <= 1) return 0;
    let max = Number.MIN_SAFE_INTEGER;
    
    for (let i = 0; i < nums.length; i += 1) {
        for (let j = 0; j < nums.length; j += 1) {
            if (i === j) continue;
            
            max = Math.max(max, nums[i] ^ nums[j])
        }   
    }
    
    return max;
};