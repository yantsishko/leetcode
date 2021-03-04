/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const isNegative = x < 0;
    x = Math.abs(x);
    let reversed = +x.toString().split('').reverse().join('');
    const MAX_INT = Math.pow(2, 31) - 1;
    const MIN_INT = Math.pow(2, 31) * -1;
    

    reversed = isNegative ? -1 * reversed : reversed;
    
    if (reversed > MAX_INT || reversed < MIN_INT) {
        return 0;
    }

    return reversed;
};