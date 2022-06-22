/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix.length) return false;
    let row = 0;
    // need to use Binary search
    for (let i = 0; i < matrix.length; i++) {
        if (target >= matrix[i][0]) {
            row = i;
        }
    }
    if (row < 0) row = 0;
    // need to use Binary search
    for (let i = 0; i < matrix[row].length; i++) {
        if (matrix[row][i] === target) {
            return true;
        }
    }
    
    return false;
};