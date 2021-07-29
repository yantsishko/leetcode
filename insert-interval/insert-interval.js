/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
     if (intervals.length === 0) {
        return [newInterval];
    }
    
    const merged = [];
    const total = [...intervals, newInterval];
    let buffer = [];

    total.sort((a, b) => a[0] - b[0]);
    buffer = total[0];

    for (let i = 1; i < total.length; i++) {
        if (total[i][0] <= buffer[1]) {
            buffer = [buffer[0], Math.max(buffer[1], total[i][1])];
        } else {
            merged.push(buffer);
            buffer = total[i];
        }
    }
    
    merged.push(buffer);
    return merged;
};