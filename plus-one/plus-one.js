/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let diff = 1;
    let index = digits.length - 1;

    while (diff === 1) {
        if (index === 0 && digits[index] + 1 === 10) {
            digits[index] = 0;
            digits.unshift(1);
            diff = 0;
        } else if (digits[index] + 1 === 10) {
            digits[index] = 0;
            index -= 1;
            diff = 1;
        } else {
            digits[index] += 1; 
            diff = 0;
        }
    }

    return digits;
};