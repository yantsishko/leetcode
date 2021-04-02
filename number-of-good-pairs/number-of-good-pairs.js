/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const objCount = {};
    
    for (let i = 0; i < nums.length; i++) {
        objCount[nums[i]] = objCount[nums[i]] ? objCount[nums[i]] + 1 : 1;
    }

    let resCount = 0;
    Object.keys(objCount).forEach((key) => {
        resCount += objCount[key] * (objCount[key] - 1) / 2;
    });
    
    return resCount;
};