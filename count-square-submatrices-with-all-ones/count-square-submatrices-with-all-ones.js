/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    if (!matrix.length) return 0;

    let resultArray = [];
    let count = 0;

    for(let i = 0; i < matrix.length; i++) {
        resultArray.push([])
    };

    for(let j=0; j < matrix[0].length; j++) {
        resultArray[0][j] = matrix[0][j];
        if (matrix[0][j] === 1) {
            count += 1;
        }
    }

    for(let i = 0; i < matrix.length; i++) {
        resultArray[i][0] = matrix[i][0];
        if (matrix[i][0] === 1 && i !== 0) {
            count += 1;
        }
    }
    
    for (let i = 1; i < matrix.length; i += 1) { //row
        for (let j = 1; j < matrix[0].length; j += 1) { //col
            const newValue = matrix[i][j] === 1 ? Math.min(resultArray[i - 1][j], resultArray[i][j - 1], resultArray[i - 1][j - 1]) + 1 : 0;
            resultArray[i][j] = newValue;
            
            count += newValue;
        }
    }

    return count;
};