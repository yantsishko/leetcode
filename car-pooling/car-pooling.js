/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    const timestamp = [];
    
    for (let i = 0; i < trips.length; i += 1) {
        timestamp.push([trips[i][1], trips[i][0]]);
        timestamp.push([trips[i][2], -trips[i][0]]);
    }
    timestamp.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    let capacityNow = 0;
    for (let i = 0; i < timestamp.length; i += 1) {
        capacityNow += timestamp[i][1];
        
        if (capacityNow > capacity) return false;
    }
    
    return true;
};