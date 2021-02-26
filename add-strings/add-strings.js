/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let result = '';
    let additional = 0;
    
    const len1 = num1.length;
    const len2 = num2.length;

    if (len1 > len2) {
        for (let i = 0; i < len1 - len2; i++) {
            num2 = '0' + num2;
        }
    }
    if (len2 > len1) {
        for (let i = 0; i < len2 - len1; i++) {
            num1 = '0' + num1;
        }
    }

    for (let i = num1.length - 1; i >= 0; i--) {
        const number1 = num1[i] || 0;
        const number2 = num2[i] || 0;
        
        const sum = +number1 + +number2 + additional;

        if (sum > 9) {
            result = (sum - 10) + result;
            additional = 1;
        } else {
            result = sum + result;
            additional = 0;
        }
    }
    
    return additional ? '1' + result : result;
};