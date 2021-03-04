/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
//     const set = new Set();
    
//     for (let i = 0; i < nums.length; i++) {
//         const hasInSet = set.has(nums[i]);

//         if (!hasInSet) {
//             set.add(nums[i]);
//         } else {
//             return nums[i];
//         }
//     }
    
    let fast = 0;
    let slow = 0;
    
    do {
        fast = nums[nums[fast]];
        slow = nums[slow];
    } while (slow !== fast)
        
    slow = 0;
    
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    
    return slow;
};