/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const v1 = version1.split('.');
    const v2 = version2.split('.');
    
    const maxLen = Math.max(v1.length, v2.length);
    
    for (let i = 0; i < maxLen; i += 1) {
        const v1Val = v1[i] ? +v1[i] : 0;
        const v2Val = v2[i] ? +v2[i] : 0;
        
        if (v1Val < v2Val) {
            return -1;
        }
        
        if (v1Val > v2Val) {
            return 1;
        }
    }
    
    return 0;
};