/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    const hash = new Set();
    
    for (let i = 0; i < arr.length; i++) {
        hash.add(arr[i]);
    }
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        const sum = arr[i] + 1;
        
        if (hash.has(sum)) {
            result += 1;
        };
    }
    
    return result;
};