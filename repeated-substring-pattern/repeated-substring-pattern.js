/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    for (let i = 1; i <= s.length / 2; i += 1) {
        const firstVal = s.substring(0, i);

        let isAllEqual = true;
        for (let j = 0; j < s.length; j += i) {
            const window = s.substring(j, j + i);

            if (window !== firstVal) {
                isAllEqual = false;
                break;
            }
        }
        
        if (isAllEqual) return true;
    }
    
    return false;
};