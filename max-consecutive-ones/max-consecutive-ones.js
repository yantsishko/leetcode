/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    if (!nums.length) return 0;
    let max = 0;
    let currNum = 0;
    
    for (let i = 0; i < nums.length; i++) {
       if (nums[i] === 1) {
           currNum++;
       }
        if (nums[i] === 0) {
            max = Math.max(max, currNum);
            currNum = 0;
        }
    }
    max = Math.max(max, currNum);
    
    return max;
};