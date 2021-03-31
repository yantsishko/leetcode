/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    for (let row = 0; row < A.length; row++){
        for (let col = 0; col < Math.floor((A[row].length + 1) / 2); col++){
            const tmp = A[row][col];
            A[row][col] = A[row][A[row].length - 1 -col] ? 0 : 1;
            A[row][A[row].length - 1 -col] = tmp ? 0 : 1;
        }
    }
    
    return A;
};