/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if (grid.length === 0) return 0;

    const n = grid.length;
    const m = grid[0].length;
    
    const dp = [...Array(n)].map((e) => Array(m).fill(0));
    dp[0][0] = grid[0][0];

    for (let i = 1; i < n; i++) {
        console.log(grid[i][0], dp[i - 1][0]);
        dp[i][0] = grid[i][0] + dp[i - 1][0];
    }
    
    for (let j = 1; j < m; j++) {
        dp[0][j] = grid[0][j] + dp[0][j - 1];
    }

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
        }
    }

    return dp[n - 1][m - 1];
};