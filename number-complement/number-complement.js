/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let bynary = num.toString(2).split('');

    bynary.forEach((bit, index) => {
        bynary[index] = +bynary[index] ? 0 : 1;
    });
    
    return parseInt(bynary.join(''), 2);
};