/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
    let max = 0;
    let s = 0;
    let zeroesCount = 0;
    
    for (let e = 0; e < A.length; e += 1) {
        if (A[e] === 0) {
            zeroesCount += 1;
        }
        
        while (zeroesCount > K) {
            if (A[s] === 0) {
                zeroesCount -= 1;
            }
            
            s += 1;
        }
        
        max = Math.max(max, e - s + 1);
    }
    
    return max;
    
    
//     let max = 0;
//     let i = 0;
//     let j = 0;
//     for (i = 0; i < A.length; i += 1) {
//         let zeroesCount = 0;
//         for (j = i; j < A.length; j += 1) {
//             if (zeroesCount === K && A[j] !== 1) {
//                 break;
//             }
//             if (A[j] === 0) {
//                 zeroesCount += 1;
//             }
//         }
//         max = Math.max(max, j - i);
//     }

//     if (i == j && max === 0) {
//         return A.length;
//     }
//     return max;
};