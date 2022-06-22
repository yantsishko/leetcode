/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
    let countSteps = 0;
    let numResult = num;
    while (numResult !== 0) {
        if (numResult % 2 === 0) {
            numResult = numResult / 2;
        } else {
            numResult -= 1;
        }
        countSteps++;
    }
    
    return countSteps;
};