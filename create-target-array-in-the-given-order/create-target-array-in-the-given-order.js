/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    const target = [];
    const insertAt = (index, element) => {
        target.splice(index, 0, element);
    }
    
    for (let i = 0; i < nums.length; i++) {
        insertAt(index[i], nums[i]);
    }
    
    return target;
};