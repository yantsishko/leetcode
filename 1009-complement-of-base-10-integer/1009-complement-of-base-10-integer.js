/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
    if (N === 0) return 1;
    const bin = N.toString(2);
    const replased = bin.split('').map(n=> n=="0" ? "1" : "0").join('');

    return parseInt(replased, 2);
};