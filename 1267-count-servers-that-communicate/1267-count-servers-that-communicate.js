/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
    let servers = new Set();

    for(let y = 0; y < grid.length; y++) {
        let serversCol = new Set();
        const length = grid[y].length;

        for(let x = 0; x < length; x++) {
            if(grid[y][x] === 1) {
                serversCol.add(`${y},${x}`);
            }
        }

        if (serversCol.size > 1) {
            Array.from(serversCol).forEach(item => servers.add(item));
        }
    }
    
    for(let x = 0; x < grid[0].length; x++) {
        let serversCol = new Set();
        const length = grid.length;

        for(let y = 0; y < length; y++) {
            if(grid[y][x] === 1) {
                serversCol.add(`${y},${x}`);
            }
        }

        if (serversCol.size > 1) {
            Array.from(serversCol).forEach(item => servers.add(item));
        }
    }

    return servers.size;
};