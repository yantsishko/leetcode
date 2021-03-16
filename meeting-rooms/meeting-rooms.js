/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    const mettingsTimes = new Array(60).fill(0);
  
    for (let i = 0; i < intervals.length; i++) {
        for (let j = intervals[i][0]; j < intervals[i][1]; j++) {
            if (mettingsTimes[j] === 1) return false;
            mettingsTimes[j] = 1;
        }
    }
  
    return true;
};