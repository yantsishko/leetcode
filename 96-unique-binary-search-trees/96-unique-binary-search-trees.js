/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    const dp = [];
    dp[0] = 1;
    
    for (let i = 1; i < n + 1; i++) {
        dp[i] = ((2*(2* i - 1)) / (i + 1)) * dp[i - 1];
    }
    
    return dp.pop();
};