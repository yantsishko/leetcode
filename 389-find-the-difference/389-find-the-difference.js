/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const hashS = {};
    const hashT = {};
    for(let i = 0; i < s.length; i++) {
        hashS[s[i]] = hashS[s[i]] ? hashS[s[i]] + 1 : 1;
        hashT[t[i]] = hashT[t[i]] ? hashT[t[i]] + 1 : 1;
    }
    
    hashT[t[t.length - 1]] = hashT[t[t.length - 1]] ? hashT[t[t.length - 1]] + 1 : 1;
    
    return Object.keys(hashT).find(key => (!hashS[key] || hashS[key] !== hashT[key]));
};