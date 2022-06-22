/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    const ret = [];
    let start = -1;

    for (let i = 0; i < S.length; i++) {
        if (i === start + 1) {
            ret.push(0);
        }

        start = Math.max(start, S.lastIndexOf(S[i]))
        ret[ret.length - 1]++;
    }

    return ret;
};