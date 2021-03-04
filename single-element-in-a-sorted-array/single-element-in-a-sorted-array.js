/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let step = 0;
    while (step < nums.length) {
        if (nums[step] !== nums[step + 1]) {
            return nums[step];
        }
        
        step += 2;
    }
};