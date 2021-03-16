/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    const result = [];
    const map = new Map();
    map.set(0, 0);

    for (let i = 0; i <= num; i += 1) {
        const prev = i >>> 1;
        if (i % 2 !== 0) {
            result.push(1 + map.get(prev));
            map.set(i, 1 + map.get(prev));
        } else {
            result.push(map.get(prev));
            map.set(i, map.get(prev));
        }
    }
    return result;
};