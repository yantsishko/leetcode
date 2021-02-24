/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    let sum = 0;
    costs.sort((a,b) => (a[0] - a[1]) - (b[0] - b[1]));

    const len = costs.length / 2;
    costs.forEach((i, index) => {
        sum += index < len ? i[0] : i[1];
    });
    
    return sum;
};
