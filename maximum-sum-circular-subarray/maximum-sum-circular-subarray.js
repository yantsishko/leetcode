/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function(A) {
    let curr_max = global_max = A[0];
    let curr_min = global_min = A[0];
    let totalSum = A[0];
    
    for (let i = 1; i < A.length; i += 1) {
        totalSum += A[i];
        curr_max = Math.max(A[i], curr_max + A[i]);
        curr_min = Math.min(A[i], curr_min + A[i]);

        if (curr_max > global_max) {
            global_max = curr_max;
        }
        
        if (curr_min < global_min) {
            global_min = curr_min;
        }
    }
    if (global_max > 0) {
        return Math.max(global_max, totalSum - global_min);
    }
    return global_max;
};