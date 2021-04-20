/**
 * @param {number[]} A
 * @return {number}
 * T = O(N);
 * S = O(N)
 */
var largestUniqueNumber = function(A) { 
    const map = {};
    
    for (let i = 0; i < A.length; i++) {
        map[A[i]] = map[A[i]] ? map[A[i]] + 1 : 1;
    }
    
    const keys = Object.keys(map);
    
    for (let i = keys.length - 1; i >= 0; i--) {
        if (map[keys[i]] === 1) return keys[i];
    }
    
    return -1;
};