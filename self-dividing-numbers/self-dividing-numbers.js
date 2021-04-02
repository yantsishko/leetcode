/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const res = [];
    for (let i = left; i <= right; i++) {
        const digits = i.toString().split('');
        let isValid = true;
        for (let j = 0; j < digits.length; j++) {
            if (+digits[j] === 0 || i % +digits[j] !== 0) {
                isValid = false;
            }
        }
        
        if (isValid) {
            res.push(i);
        }
    }
    
    return res;
};