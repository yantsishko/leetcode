/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function(A, B) {
    let aPos = 0;
    let bPos = 0;
    const result = [];
    
    while (aPos < A.length && bPos < B.length) {
        const intervalA = A[aPos];
        const intervalB = B[bPos];
 
        const endpoint = Math.min(intervalA[1], intervalB[1]);
        const startpoint = Math.max(intervalA[0], intervalB[0]);
        if (startpoint <= endpoint) {
            result.push([startpoint, endpoint]);
        }
        
        if (intervalA[1] < intervalB[1]) {
            aPos += 1;
        } else {
            bPos += 1;
        }
    }

    // for (let i = 0; i < A.length; i += 1) {
    //     for (let j = 0; j < B.length; j += 1) {
    //         const intervalA = A[i];
    //         const intervalB = B[j];
    //         if (
    //             intervalA[1] < intervalB[0]
    //         ) {
    //             continue;
    //         }
    //         const endpoint = Math.min(intervalA[1], intervalB[1]);
    //         const startpoint = Math.max(intervalA[0], intervalB[0]);
    //         if (startpoint <= endpoint) {
    //             result.push([startpoint, endpoint]);
    //         }
    //     }
    // }
    
    return result;
};