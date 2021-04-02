/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a, b) => a - b);

    let sum = 0;
    for (let i = 2; i < nums.length + 1; i+=2) {
        sum += Math.min(nums[i - 1], nums[i - 2]);
    }
    
    return sum;
};