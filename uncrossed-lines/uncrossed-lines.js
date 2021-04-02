/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var maxUncrossedLines = function(A, B) {
    if (!A.length || !B.length) {
        return 0;
    }
    const arr = new Array(A.length + 1);
    for (let i = 0; i < arr.length; i += 1) {
        arr[i] = new Array(B.length + 1).fill(0);
    }
    
    for (let i = 1; i < arr.length; i += 1) {
        for (let j = 1; j < arr[0].length; j += 1) {
            if (A[i - 1] === B[j - 1]) {
                arr[i][j] = arr[i - 1][j - 1] + 1;
            } else {
                const max = Math.max(arr[i - 1][j], arr[i][j - 1]);
                arr[i][j] = max;
            }
        }
    }
    
    return arr[arr.length - 1][arr[0].length - 1];
};