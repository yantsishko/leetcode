/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) {
        return Math.max(nums[0], nums[1]);
    }

    const dp = [];
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    
    for (let i = 2; i < nums.length - 1; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }
        
    const dp2 = [];
    dp2[0] = nums[1];
    dp2[1] = Math.max(nums[1], nums[2]);
    
    for (let i = 2; i < nums.length - 1; i++) {
        dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + nums[i + 1]);
    }

    return Math.max(dp.pop(), dp2.pop());
};