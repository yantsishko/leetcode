/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    nums = nums.sort((a,b) => a - b);
    const uniq = new Set(nums);
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        const currentValue = i + 1;
        
        if (!uniq.has(currentValue)) {
            result.push(currentValue)
        }
    }
    
    return result;
};