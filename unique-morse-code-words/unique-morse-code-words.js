/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const set = new Set();
    
    for (let i = 0; i < words.length; i++) {
        let morseStr = '';
        for (let j = 0; j < words[i].length; j++) {
            morseStr += morse[words[i].charCodeAt(j) - 97];
        }

        set.add(morseStr);
    }
    
    return set.size;
};