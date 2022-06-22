/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    let currPow = 0;
    let iterator = 0;

    while (num > currPow) {
        currPow = Math.pow(4, iterator);
        
        if (currPow === num) {
            return true;
        }
        
        iterator++;
    }
    
    return false;
};