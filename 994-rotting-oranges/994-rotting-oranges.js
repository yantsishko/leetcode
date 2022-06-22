/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let rottenQueue = [];
    let freshCount = 0;
    for (let i = 0; i < grid.length; i += 1) {
      for (let j = 0; j < grid[0].length; j += 1) {
            if (grid[i][j] === 1) {
                freshCount++;
            }
            if (grid[i][j] === 2) {
                rottenQueue.push([i, j])
            }
        }  
    }

    if (freshCount === 0) return 0;
    
    let minute = 0;
    
    const markRotten = (row,col)=>{
        if (row>0 && grid[row-1][col] === 1){
            grid[row-1][col] = 2;
            rottenQueue.push([row-1, col])
            freshCount--;
        } 
        if (col>0 && grid[row][col-1] === 1){
            grid[row][col-1] = 2;    
            rottenQueue.push([row, col-1])
            freshCount--;
        } 
        if (row<grid.length-1 && grid[row+1][col] === 1){
            grid[row+1][col] = 2;    
            rottenQueue.push([row+1, col]);
            freshCount--;
        } 
        if (col<grid[0].length-1 && grid[row][col+1] === 1){
            rottenQueue.push([row, col+1])
            grid[row][col+1] = 2;    
            freshCount--;
        }
    }
    
    while (rottenQueue.length > 0) {
        const len = rottenQueue.length;
        
        for (let i = 0; i < len; i += 1) {
            const [row, col] = rottenQueue.shift();
            markRotten(row, col);
        }
        
        minute++;
    }
    
    if (freshCount > 0) return -1;
    
    return minute - 1;
};