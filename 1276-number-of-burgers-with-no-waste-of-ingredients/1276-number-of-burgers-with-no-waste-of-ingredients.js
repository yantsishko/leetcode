/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */
var numOfBurgers = function(tomatoSlices, cheeseSlices) {
    if (tomatoSlices === 0 && cheeseSlices === 0) {
        return [0,0];
    }
    
    if (tomatoSlices % 2 !== 0) {
        return [];
    }
    
    if (tomatoSlices < cheeseSlices * 2) {
        return [];
    }
    
    const tom = tomatoSlices / 2;
    const jumb = tom - cheeseSlices;
    
    
    return cheeseSlices - jumb > 0 ? [jumb, cheeseSlices - jumb] : [];
};