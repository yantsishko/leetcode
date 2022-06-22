/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    const array = Array.from(word);
    
    let isAllCapital = true;
    let isAllLow = true;
    let isFirstCapital = false;
    let someCapital = 0;
    
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] !== array[i].toLowerCase()) {
            isAllCapital = false;
        }
        if (array[i] !== array[i].toUpperCase()) {
            isAllLow = false;
        }
        
        if (i === 0 && array[i] === array[i].toUpperCase()) {
            isFirstCapital = true;
        }
        if (i > 0 && array[i] !== array[i].toLowerCase()) {
            someCapital = i;
        }
    }
    
    return isAllCapital || isAllLow || (isFirstCapital && someCapital === 0);
};