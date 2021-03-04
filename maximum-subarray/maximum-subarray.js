/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const dp = [];
    if (nums.length === 1) {
        return nums[0];
    }
    let max = nums[0];
    dp[0] = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
        max = Math.max(max, dp[i]);
    }

    return max;
//     if (!nums.length) return 0;
//     let max_here = 0;
//     let max_so_far = 0;
//     let max = nums[0];
//     for (let i=0; i < nums.length; i++) {
//         max_here = max_here + nums[i]; 
//         max_here = Math.max(0, max_here)

//         max_so_far = Math.max(max_so_far, max_here)

//         max = Math.max(max, nums[i]);
//     }
    
//     return max_so_far === 0 ? max : max_so_far;
};