/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const countToEat = candyType.length / 2;
    const set = new Set();
    
    for (let i = 0; i < candyType.length; i++) {
        set.add(candyType[i]);
    }
    
    return set.size > countToEat ? countToEat : set.size;
};