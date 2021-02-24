/**
 * @param {number[][]} intervals
 * @return {number[][]}
 
 T = O(NlogN)
 S = O(N)
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0] || a[1] - b[1]); // NlogN
    const result = [];
    let index = 0;
    while (index < intervals.length) {
        if (
            !result.length
            || result[result.length - 1][1] < intervals[index][0]
        ) {
            result.push(intervals[index]);
        } else {
            result[result.length - 1][1] = Math.max(result[result.length - 1][1], intervals[index][1]);
        }
        index++;
    }
    
    return result;
};