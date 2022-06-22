/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    // Time Complexity: O(nlog(n))
    // Space Complexity: O(1)

    intervals.sort((a,b) => {
        if (a[0] == b[0]) return b[1] - a[1];
        else return a[0] - b[0];
    });

    let remove = 0;
    for (let i = 0; i < intervals.length - 1; i++) {
        if (intervals[i][1] >= intervals[i + 1][1]) {
            remove++;
            intervals[i + 1] = intervals[i];
        }
    }
    return intervals.length - remove;


//     let count = intervals.length;
//     for (let i = 0; i < intervals.length; i++) {
//         for (let j = 0; j < intervals.length; j++) {
//             if (i === j || !intervals[i] || !intervals[j]) {
//                  continue;
//             } else {
//                 if (
//                     intervals[j][0] <= intervals[i][0]
//                     && intervals[j][1] >= intervals[i][1]
//                 ) {
//                     count--;
//                     intervals[i] = undefined;
//                 }
//             }
//         }
//     }
    
//     return count;
};