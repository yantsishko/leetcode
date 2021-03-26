/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) { 
    let count = 0;
    
    let i = 5;
    
    while ( n / i >= 1) {
        count = count + Math.floor(n / i);
        i *= 5
    }
    
    return count;
};