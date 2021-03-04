/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    const length = s.length;
    for (let i = 0; i < Math.floor(length / 2); i++) {
        const temp = s[i];
        s[i] = s[length - 1 - i];
        s[length - 1 - i] = temp;
    }
    
    return s;
};