/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    let shifts = 0;
    while (m != n) {
        m = m >> 1;
        n = n >> 1;
        
        shifts++;
    }
    
    return m << shifts;
};