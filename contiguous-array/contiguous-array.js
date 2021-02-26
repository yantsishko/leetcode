/**
 * @param {number[]} nums
 * @return {number}
 */

var findMaxLength = function(nums) {
    const memo = new Map();
    memo.set(0, -1);
    let counter = 0, maxLen = 0;
    for (let i = 0; i < nums.length; i++) {
        counter = nums[i] === 0 ? counter - 1 : counter + 1;
        if (memo.has(counter)) {
            maxLen = Math.max(maxLen, i - memo.get(counter));
        } else {
            memo.set(counter, i);
        }
    }
    return maxLen;
};