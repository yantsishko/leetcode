/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const hash = {};
    for (const char of s) {
        hash[char] = hash[char] ? hash[char] + 1 : 1;
    }
    
    const sorted = Object.entries(hash).sort((a,b) => b[1] - a[1]);
    
    return  sorted.reduce((accum, value) => {
        return accum + value[0].repeat(value[1])
    }, '')
};