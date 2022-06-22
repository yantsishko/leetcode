/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    let count = 0;
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], map.get(nums[i]) + 1 || 1);
    }
    
    map.forEach((val, key) => {
        if (k === 0) {
            if (map.get(key) > 1) count++;
        } else {
            if (map.has(key + k)) count++;
        }
    });
    
    return count;
    
    // T: O(N^2)
    // S: O(N)
//     let res = [];
//     const set = new Set();

//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length; j++) {
//             if (
//                 i >= 0
//                 && j < nums.length
//                 && i !== j
//                 && nums[i] <= nums[j]
//                 && nums[j] - nums[i] === k
//             ) {
//                 set.add(`${nums[i]}-${nums[j]}`);
//             }
//         }
//     }

//     return set.size;
};