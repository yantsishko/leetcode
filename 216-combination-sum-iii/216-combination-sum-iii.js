/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const res = [];

    const comb = (k, n, l, a) => {
        if (n < 0) return;
        if (n === 0 && a.length === k) {
            res.push(a);
            return;
        }
        
        for (let i = l; i <= 9; i += 1) {
            a.push(i);
            comb(k, n - i, i + 1, [...a]);
            a.pop();
        }
    }
    
    comb(k, n, 1, []);
    
    return res;
};