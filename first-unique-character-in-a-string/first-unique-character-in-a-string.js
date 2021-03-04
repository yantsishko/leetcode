/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    if (!s) return -1;
    const hash = {};
    const sArray = Array.from(s);
    for (let i = 0; i < sArray.length; i++) {
        if (hash[sArray[i]] === undefined) {
            hash[sArray[i]] = i;
        } else {
            hash[sArray[i]] = -1;
        }
    }

    const keys = Object.keys(hash);

    for (let key of keys) {
        if (hash[key] !== -1) {
            return hash[key];
        }
    }
    
    return -1;
};