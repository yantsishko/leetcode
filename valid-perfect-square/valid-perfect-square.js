/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let left = 1;
    let right = num;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const mult = mid * mid;
        if (mult === num) return true;
        
        if (mult > num) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return false;
};