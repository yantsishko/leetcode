/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if (m === 1 || n === 1) return 1;
    const dp = new Array(m + 1);
    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(n + 1).fill(0);
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (i === 1 || j === 1) {
                dp[i][j] = 1;
            } else {
               dp[i][j] = dp[i - 1][j] + dp[i][j - 1]; 
            }
        }
    }
    
    return dp[dp.length - 1][dp[0].length - 1];
};