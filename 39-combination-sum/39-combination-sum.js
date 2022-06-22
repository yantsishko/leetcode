/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum = function(candidates, target) {
    const res = [];
    candidates = candidates.sort((a, b) => a - b);

    const dfs = (target, index, path) => {
    if (target === 0) {
        res.push(path);
        return;
    };
    
    for (let i = index; i < candidates.length; i++) {
        if (candidates[i] > target) return;
        path.push(candidates[i]);
        dfs(target - candidates[i], i, [...path]);
        path.pop();
    }
}
    
    
    dfs(target, 0, []);
    
    return res;
};