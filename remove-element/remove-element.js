/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
//     for (let i = 0; i < nums.length; i += 1) {
//         if (nums[i] === val) {
//             nums.splice(i, 1);
//             i -= 1;
//         }
//     }
    
//     return nums.length;
    
    let p1 = 0;
    let p2 = nums.length - 1;
    
    while (p1 <= p2) {
        if (nums[p1] === val) {
            nums.splice(p1, 1);
        } else {
            p1 += 1;
        }
        if (nums[p2] === val) {
            nums.splice(p2, 1);
        }
        
        p2 -= 1;
    }
    
    return nums.length;
};