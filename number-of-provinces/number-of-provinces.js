/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
    let level = 0;
    const visited = new Set();
    const dfs = (ind) => {
        for (let i = 0; i < M[ind].length; i++) {
            if (M[ind][i] === 1 && !visited.has(i)) {
                visited.add(i);
                dfs(i);
            }
        }
    }
    for (let i = 0; i < M.length; i++) {
        if (!visited.has(i)) {
            visited.add(i);
            dfs(i);
            level = level + 1;
        }
    }
    
    return level;
};