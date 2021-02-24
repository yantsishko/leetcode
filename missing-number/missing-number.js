/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const expectedSum = (nums.length * (nums.length + 1)) / 2;
    let currentSum = 0;
    nums.forEach(num => { currentSum += num; } );
    
    return expectedSum - currentSum;
};