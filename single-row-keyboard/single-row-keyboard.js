/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function(keyboard, word) {
    let map = {};
    
    for (let i = 0; i < keyboard.length; i++) {
        map[keyboard[i]] = i;
    }

    let prevPosition = map[word[0]];
    let result = prevPosition;
    for (let i = 1; i < word.length; i++) {
        const currentPosition = map[word[i]];
        result = result + Math.abs(currentPosition - prevPosition);
        prevPosition = currentPosition;
    }
    
    return result;
};