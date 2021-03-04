/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (!numRows) return [];
    if (numRows === 1) return [[1]];

    const result = [[1], [1,1]];
    for (let i = 1; i <= numRows - 2; i += 1) {
        const row = [1];
        for (let j = 0; j <= i - 1; j += 1) {
            const prev = result[i];
            row.push(prev[j] + prev[j + 1]);
        }
        row.push(1);
        result.push(row);
    }
    
    return result;
};