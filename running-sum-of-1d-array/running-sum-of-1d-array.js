/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let rs = 0;
    return nums.map((cv) => {
        rs += cv;
        return rs;
    });
};