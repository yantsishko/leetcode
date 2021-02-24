/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    return b ? getSum(a ^ b, (a & b) << 1) : a;
};