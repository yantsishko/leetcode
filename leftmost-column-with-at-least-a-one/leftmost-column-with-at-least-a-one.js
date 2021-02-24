/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} x, y
 *     @return {integer}
 *     this.get = function(x, y) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function(binaryMatrix) {
    const [rows, cols] = binaryMatrix.dimensions();
    
    let result = -1;
    let isEnd = false;
    
    let x = 0;
    let y = cols - 1;

    while (x < rows && y >= 0) {
        
        if (binaryMatrix.get(x, y)) {
            result = y;
            y -= 1;
        } else {
            x += 1;
        }
    }
    
    return result;
};