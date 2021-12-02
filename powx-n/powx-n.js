/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) {
        return 1;
    }
    if (n < 0) {
        return 1 / myPow(x, -n)
    }

    const pow2 = myPow(x, Math.floor(n / 2));

    if (n % 2 === 1) {
        return x * pow2 * pow2;
    }

    return pow2 * pow2;
};