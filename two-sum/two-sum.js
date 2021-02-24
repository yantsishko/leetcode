/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const visited = {};
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (diff in visited) {
            return [visited[diff], i];
        }
            
        visited[nums[i]] = i;
    }
    
    return null;
};