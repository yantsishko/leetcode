/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if (!matrix.length) return 0;

    let resultArray = [];
    let max = 0;

    for(let i = 0; i < matrix.length; i++) {
        resultArray.push([])
    };

    for(let j=0; j < matrix[0].length; j++) {
        resultArray[0][j] = matrix[0][j];
        if (matrix[0][j] == 1) {
            max = 1;
        }
    }

    for(let i=0; i < matrix.length; i++) {
        resultArray[i][0] = matrix[i][0];
        if (matrix[i][0] == 1) {
            max = 1;
        }
    }
    
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][j] === '0') {
                resultArray[i][j] = 0;
            } else {
                const min = Math.min(resultArray[i][j - 1], resultArray[i - 1][j - 1], resultArray[i -1 ][j]);
                resultArray[i][j] = min + 1;
                
                if (resultArray[i][j] > max) {
                    max = resultArray[i][j];
                }
            }
        }
    }

    return max * max;
};