/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if(!s || s.length < p.length) return [];

    const pHash = Array(26).fill(0);
    const sLen = s.length;
    const pLen = p.length;
    const result = [];
    
    for (let i = 0; i < p.length; i += 1) {
        let index = p.charCodeAt(i) - 97;
        pHash[index] += 1;
    }
    
    const sheckIsAnagram = (str, p) => {
        const hash = Array(26).fill(0);
        for (let i = 0; i < str.length; i += 1) {
            let index = str.charCodeAt(i) - 97;
            hash[index] += 1;
        }
        
        for(let i = 0; i < 26; i += 1){
            if(hash[i] !== pHash[i]) return false;
        }
        
        return true;
    }
    
    for (let i = 0; i <= sLen - pLen; i += 1) {
        const str = s.substr(i, pLen);
        const isAnagram = sheckIsAnagram(str, p);
        if (isAnagram) {
            result.push(i);
        }
    }
    
    return result;
};