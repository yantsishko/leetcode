/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const minCount = Math.floor(nums.length / 2);
    const counterMap = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (!counterMap[num]) {
            counterMap[num] = 0;
        }
        
        counterMap[num] = counterMap[num] + 1;

        if (counterMap[num] > minCount) {
            return num;
        }
    }
};