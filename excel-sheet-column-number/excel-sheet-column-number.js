/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const value = s[i].charCodeAt(0) - 64;
        result = result * 26 + value;
    }

    return result;
};