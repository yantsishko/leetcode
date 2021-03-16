/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const res = [];
    for (let i = 0; i < nums.length / 2; i++) {
        res.push(nums[i]);
        res.push(nums[i + n]);
    }
    
    return res;
};