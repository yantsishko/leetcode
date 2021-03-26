/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let currentPerimeter = 0;
    
    for (let i = 0; i < grid.length; i += 1) { //row
        for (let j = 0; j < grid[0].length; j += 1) { //col
            if (grid[i][j] === 1) {
                let perimeter = 4;
                if (j + 1 < grid[0].length && grid[i][j + 1] === 1) {
                    perimeter -= 1;
                }
                if (j - 1 >= 0 && grid[i][j - 1] === 1) {
                    perimeter -= 1;
                }
                if (i + 1 < grid.length && grid[i + 1][j] === 1) {
                    perimeter -= 1;
                }
                if (i - 1 >= 0 && grid[i - 1][j] === 1) {
                    perimeter -= 1;
                }
                
                currentPerimeter += perimeter;
            }
        }
    }
    
    return currentPerimeter;
};