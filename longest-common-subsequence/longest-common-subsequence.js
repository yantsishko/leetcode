/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 * T = O(N * M), N,M - legth of strings
 * S = O(N * M)
 */
var longestCommonSubsequence = function(text1, text2) {
    let resultArray = [];

    for(let i = 0; i <= text2.length; i++) {
        resultArray.push([])
    };

    for(let j=0; j <= text1.length; j++) {
        resultArray[0][j] = 0;
    }

    for(let i=0; i <= text2.length; i++) {
        resultArray[i][0] = 0;
    }

    for(let i = 0; i < text2.length; i++) {
        for(let j = 0; j < text1.length; j++) {
            const n = i+1;
            const m = j+1;
            
            if(text1[j] === text2[i]) {
                resultArray[n][m] = resultArray[n-1][m-1] + 1;
            } else {
                resultArray[n][m] = Math.max(resultArray[n-1][m], resultArray[n][m-1]);
            }
        }
    }

    return resultArray[text2.length][text1.length];
};