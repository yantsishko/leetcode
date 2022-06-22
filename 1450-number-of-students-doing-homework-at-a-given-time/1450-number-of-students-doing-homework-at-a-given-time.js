/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
    if (startTime.length !== endTime.length) {
        return 0;
    }
    
    let counter = 0;
    
    for (let i = 0; i < startTime.length; i += 1) {
        const diff = endTime[i] - startTime[i];
        
        if ((queryTime >= startTime[i] && queryTime <= endTime[i]) || (endTime[i] === startTime[i] && endTime[i] === queryTime)) {
            counter++;
        }
    }
    
    return counter;
};