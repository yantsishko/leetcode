/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
//     if (!nums.length) return 1;
//     const set = new Set();
    
//     for (let i = 0; i < nums.length; i++) {
//         set.add(nums[i]);
//     }
    
//     for (let i = 1; i <= nums.length; i++) {
//         if (!set.has(i)) return i;
//     }
    
//     return nums.length + 1;
    
    if (!nums.length) return 1;
    
    let containsOne = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            containsOne = 1;
        } else if (nums[i] <= 0 || nums[i] > nums.length) {
            nums[i] = 1;
        }
    }
    
    if (containsOne === 0) return 1;
    
    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1;
        if (nums[index] > 0) {
            nums[index] = nums[index] * -1;
        }
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) return i + 1;
    }
    
    return nums.length + 1;
};