/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    let res = '';
    nums.sort((a, b) => +`${b}${a}` - +`${a}${b}`).forEach(num => {
        res = res + num.toString();
    });
    if (res[0] === '0') return '0';
    return res;
};