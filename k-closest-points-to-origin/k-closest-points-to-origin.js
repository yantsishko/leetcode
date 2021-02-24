/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    if (!K || !points.length) {
        return [];
    }
    const res = {};
    for (let i = 0; i < points.length; i += 1) {
        const dist = Math.pow((0 - points[i][0]), 2) + Math.pow((0 - points[i][1]), 2);
        if (res[dist]) {
            res[dist].push([points[i][0], points[i][1]]);
        } else {
            res[dist] = [[points[i][0], points[i][1]]];
        } 
    }

    const keys = Object.keys(res);
    const result = [];
    let i = 0;
    Object.keys(res).some((key) => {
        if (i === K) return true;
        for (let j = 0; j < res[key].length; j += 1) {
            if (i === K) break;
            result.push(res[key][j]);
            i++;
        }
    })
    
    return result;
    
};