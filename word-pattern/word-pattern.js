/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    const strToArray = str.split(' ');
    const hashCharToWord = {};
    const hashWordToChar = {};

    if (pattern.length !== strToArray.length) {
        return false;
    }
    
    for (let i = 0; i < pattern.length; i += 1){
        if (hashCharToWord[pattern[i]] === undefined) {
            if (hashWordToChar[strToArray[i]] !== undefined) {
                return false;
            }
            hashCharToWord[pattern[i]] = i;
            hashWordToChar[strToArray[i]] = pattern[i];
        } else {
            if (strToArray[i] !== strToArray[hashCharToWord[pattern[i]]]) {
                return false;
            }
        }
    }
    
    return true;
};