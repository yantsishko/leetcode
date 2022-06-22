/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    const str = new Array(indices.length);

    for (let i = 0; i < indices.length; i++) {
        str[indices[i]] = s[i];
    }
    
    return str.join('');
};