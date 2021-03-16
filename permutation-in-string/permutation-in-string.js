/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const s1Arr = Array(26).fill(0);
    
    for (let i = 0; i < s1.length; i += 1) {
        const index = s1.charCodeAt(i) - 97;
        s1Arr[index] += 1;
    }
    
    const isPermutation = (str) => {
        const s2Arr = Array(26).fill(0);

        for (let i = 0; i < str.length; i += 1) {
            const index = str.charCodeAt(i) - 97;
            s2Arr[index] += 1;
        }
        for (let i = 0; i < 26; i += 1) {
            if (s2Arr[i] !== s1Arr[i]) {
                return false;
            }
        }
        
        return true;
    }
    
    for (let i = 0; i < s2.length - s1.length + 1; i += 1) {
        const isPermut = isPermutation(s2.substr(i, s1.length));
        if (isPermut) return true;
    }
    
    return false;
};