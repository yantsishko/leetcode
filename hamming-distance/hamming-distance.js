/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let xor = x ^ y;

    let setBits = 0;
    
    while (xor > 0) {
        setBits += xor & 1;
 
        xor >>= 1;
    }
    
    return setBits;
};