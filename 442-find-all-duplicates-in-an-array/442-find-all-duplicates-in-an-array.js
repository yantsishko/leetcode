/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var findDuplicates = function(nums) {
//     const sorted = nums.sort((a,b) => a - b);
//     const res = [];
    
//     for (let i = 0; i < sorted.length - 1; i += 1) {
//         if (sorted[i] === sorted[i + 1]) {
//             res.push(sorted[i]);
//         }
//     }
    
//     return res;
// };

var findDuplicates = function(nums) {
    const hash = new Map();
    const res = [];
    
    const length = nums.length;
    
    for (let i = 0; i < nums.length; i += 1) {
        const dif = length - nums[i];
        if (hash.has(dif)) {
            res.push(nums[i]);
        } else {
            hash.set(dif);
        }
    }
    
    return res;
};