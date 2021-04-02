/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let sum = 0;
    if (!n) return 0;

    for (let i = 1; i <= n; i += 1) {
        if (sum + i > n) {
            return i - 1;
        }
        sum += i;
    }
    
    return sum;
};