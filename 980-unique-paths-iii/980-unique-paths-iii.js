/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
    let zeros = 0;
    let sx = 0;
    let sy = 0;
    let paths = 0;
    
    for (let r = 0; r < grid.length; r += 1) {
        for (let c = 0; c < grid[0].length; c += 1) {
            if (grid[r][c] === 0) {
                zeros += 1;
            }
            if (grid[r][c] === 1) {
                sx = r;
                sy = c;
            }
        }
    }

    const dfs = (grid, r, c, count) => {
        if (r > grid.length - 1 || r < 0 || c < 0 || c > grid[0].length - 1 || grid[r][c] < 0) return 0;
        
        if (grid[r][c] === 1 && count > 0) {
            return 0;
        }
        
        if (grid[r][c] === 2) {
            if (count === zeros) {
                paths += 1; 
            }
            return 0;
        }
        
        if (grid[r][c] === 0) {
            count += 1;
            grid[r][c] = -2;
        }
        
        dfs(grid, r + 1, c, count);
        dfs(grid, r - 1, c, count);
        dfs(grid, r, c + 1, count);
        dfs(grid, r, c - 1, count);
        
        if (grid[r][c] === -2) {
            count -= 1;
            grid[r][c] = 0;
        }

    }
    
    dfs(grid, sx, sy, 0);
    
    return paths;
};