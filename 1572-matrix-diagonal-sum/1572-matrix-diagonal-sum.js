/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let col = 0;
    let colR = mat.length - 1;
    let sum = 0;

    for (let row = 0; row < mat.length; row++) {
        if (col !== colR) {
          sum += mat[row][colR];
        }

        sum += mat[row][col];

        col++;
        colR--;
    }
    
    return sum;
};