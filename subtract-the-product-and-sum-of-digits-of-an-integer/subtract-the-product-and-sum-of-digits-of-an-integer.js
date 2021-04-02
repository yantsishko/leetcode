/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const nStr = n.toString().split('');
    
    let sum = 0;
    let product = 1;
    
    nStr.forEach(number => {
        sum += +number;
        product *= number;
    });
    
    return product- sum;
};