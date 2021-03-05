/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const countToEat = candyType.length / 2;
    const set = new Set(candyType);
    
    return Math.min(set.size, countToEat);
};