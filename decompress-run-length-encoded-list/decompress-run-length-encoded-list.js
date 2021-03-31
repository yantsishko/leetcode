/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let ind = 0;
    let res = [];
    
    while (2 * ind < nums.length && 2 * ind + 1 < nums.length) {
        for (let i = 0; i < nums[2 * ind]; i++) {
           res.push(nums[2 * ind + 1]) 
        }
        ind++;
    }
    
    return res;
};