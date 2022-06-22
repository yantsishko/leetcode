/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
//     let windowSize = 1;
//     let max = null;
    
//     const calcSum = (start, end) => {
//         let sum = 1;
//         for (let i = start; i <= end; i += 1) {
//             sum *= nums[i];
//         }

//         max = max ? Math.max(max, sum) : sum;
//     }
    
//     while (windowSize <= nums.length) {
//         for (let i = 0; i < Math.floor(nums.length - windowSize + 1); i += 1) {
//             calcSum(i, i + windowSize - 1);
//         }
        
//         windowSize += 1;
//     }
    
//     return max;

    let currentMax = nums[0];
    let prevMax = nums[0];
    let prevMin = nums[0];
    let ans = nums[0];
    
    for (let i = 1; i < nums.length; i += 1) {
        currentMax = Math.max(prevMax * nums[i], prevMin * nums[i], nums[i]);
        const currentMin = Math.min(prevMax * nums[i], prevMin * nums[i], nums[i]);
        ans = Math.max(ans, currentMax);
        prevMax = currentMax;
        prevMin = currentMin;
    }
    
    return ans;
};