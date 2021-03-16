/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    // if (obstacleGrid.length === 1 || obstacleGrid[0].length === 1) return 1;
    const rows = obstacleGrid.length;
    const cols = obstacleGrid[0].length;
    
    const dp = Array(rows + 1);
    
    for (let i = 0; i <= rows; i++) {
        dp[i] = Array(cols + 1).fill(0);
    }
    
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            if (i === 1 && j === 1) {
                dp[i][j] = obstacleGrid[i - 1][j - 1] === 0 ? 1 : 0;
            } else {
                dp[i][j] = obstacleGrid[i - 1][j - 1] === 0
                    ? dp[i - 1][j] + dp[i][j - 1] : 0;
            }
        }  
    }

    return dp[dp.length - 1][dp[0].length - 1];
};