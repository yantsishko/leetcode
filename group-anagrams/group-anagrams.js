/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hash = {};
    
    strs.forEach(str => {
        const strLetters = str.split('').sort().join(',');
         if (hash[strLetters]) {
             hash[strLetters].push(str)
         } else {
             hash[strLetters] = [str];
         }
    });
    
    return Object.values(hash);
};