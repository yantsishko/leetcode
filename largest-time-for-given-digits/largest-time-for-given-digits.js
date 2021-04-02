/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function(A) {
    let table = [];
  
    for(let i1 = 0; i1 < A.length; i1++) {
        for(let i2 = 0; i2 < A.length; i2++) {
            if (i2 === i1) continue;

            for(let i3 = 0; i3 < A.length; i3++) {
                if (i3 === i1 || i3 === i2) continue;

                for(let i4 = 0; i4 < A.length; i4++) {
                    if (i4 === i1 || i4 === i2 || i4 === i3) continue;

                    if (`${A[i1]}${A[i2]}` < 24 && `${A[i3]}${A[i4]}` < 60) {
                        table.push(`${A[i1]}${A[i2]}:${A[i3]}${A[i4]}`);
                    }
                }
            }
        }
    }

    return table.sort((a,b) => a < b ? 1 : -1)[0] ? table[0] : '';
};