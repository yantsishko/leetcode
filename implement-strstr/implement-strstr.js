/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let p2 = 0;
    
    if (!needle.length) {
        return 0;
    }
    
    for (let p1 = 0; p1 < haystack.length; p1 += 1) {
        if (haystack[p1] === needle[p2]) {
            if (p2 === needle.length - 1) {
                return p1 - p2;
            }
            p2 += 1;
        } else {
            p1 -= p2;
            p2 = 0;
        }
    }
    
    return -1;
};