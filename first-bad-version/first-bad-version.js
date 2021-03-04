/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1;
        let right = n;
        let firstBad = 0;
        
        while (left <= right) {
            let middle = Math.floor((left + right) / 2);
            if (isBadVersion(middle)) {
                firstBad = middle;
            }
            
            if (isBadVersion(middle)) {
                right = middle - 1;
            }
            
            if (!isBadVersion(middle)) {
                left = middle + 1;
            }
        }
        
        return firstBad;
    };
};