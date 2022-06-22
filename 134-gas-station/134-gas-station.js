/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
// gas  = [1,2,3,4,5]
// cost = [3,4,5,1,2]
var canCompleteCircuit = function(gas, cost) {
    let c = 0;
    let tank = 0;
    let g = 0;
    let startIndex = 0;
    
    for (let i = 0;i < gas.length; i++) {
        g += gas[i];
        c += cost[i];
        
        tank += (gas[i] - cost[i]);
        
        if (tank < 0) {
            tank = 0;
            startIndex = i + 1;
        }

    }
    
    if (g < c) {
        return -1;
    }
        
    return startIndex;

};