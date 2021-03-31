/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const nLeng = nums.length;
    let shift = 0;
    for (let i = nLeng - 1; i >= nLeng - k; i -= 1) {
        nums.unshift(nums[i + shift]);
        shift += 1;
    }
    nums.splice(nums.length - k, k);

    return nums;
};