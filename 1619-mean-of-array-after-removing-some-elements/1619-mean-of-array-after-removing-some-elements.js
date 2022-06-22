/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    let five = Math.floor(arr.length / 20);
    arr.sort((a, b) => a - b);

    arr.length = arr.length - five;

    let count = 0;
    
    for (let i = five; i < arr.length; i++) {
        count += arr[i];
    }
    
    return count / (arr.length - five);
};