/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const hashOriginal = {};
    const hashAnagram = {};
    let isValid = true;
    
    for (let i = 0; i < s.length; i += 1) {
        hashOriginal[s[i]] = hashOriginal[s[i]] ? hashOriginal[s[i]] + 1 : 1;
    }
    
    for (let i = 0; i < t.length; i += 1) {
        hashAnagram[t[i]] = hashAnagram[t[i]] ? hashAnagram[t[i]] + 1 : 1;
    }
    
    for (const key of Object.keys(hashOriginal)) {
        if (hashOriginal[key] !== hashAnagram[key]) {
            isValid = false;
            break;
        }
    }
    
    return isValid;
};