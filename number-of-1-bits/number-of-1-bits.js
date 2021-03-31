/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    const binary = n.toString(2);
    let counter = 0;
    
    for (let i = 0; i < binary.length; i += 1) {
        if (binary[i] & 1) {
            counter++;
        }
    }
    
    return counter;
};