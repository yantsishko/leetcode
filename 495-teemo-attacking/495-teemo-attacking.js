/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    if (!timeSeries.length) return 0;
    let count = 0;
    
    for (let i = 0; i < timeSeries.length - 1; i++) {
        if (timeSeries[i + 1] - timeSeries[i] >= duration) {
            count += duration;
        } else {
            count += timeSeries[i + 1] - timeSeries[i];
        }
    }
    
    return count + duration;
};