/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let zeroCount = 0;
    const total = nums.reduce((total, number) => {
         if (number) {
            return total * number;
         }
        zeroCount += 1;
        
        return total;
    }, 1);
    return nums.map(number => {
        if (number) {
            return zeroCount > 0 ? 0 : total / number;
        }
        return zeroCount > 1 ? 0 : total;
    });
};