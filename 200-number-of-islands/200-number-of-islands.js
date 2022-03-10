/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid.length) return 0;

    let islandCount = 0;
    
    const helper = function(row, col) {
        if (!grid[row] || !grid[row][col] || !parseInt(grid[row][col])) return;
        grid[row][col] = 0;
        helper(row, col + 1);
        helper(row, col - 1);
        helper(row + 1, col);
        helper(row - 1, col);
    }
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                islandCount += 1;
            }
            helper(i, j);
        }
    }
    
    return islandCount;
};