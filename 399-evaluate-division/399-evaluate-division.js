/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
const Node = function(key = null, val = null) {
    this.key = key;
    this.val = val;
}

const buildGraph = (eq, val) => {
    const hashMap = new Map();
    
    for (let i = 0; i < val.length; i++) {
        const src = eq[i][0];
        const dst = eq[i][1];
        if (!hashMap.has(src)) {
            hashMap.set(src, []);
        }
        if (!hashMap.has(dst)) {
            hashMap.set(dst, []);
        }
        hashMap.get(src).push(new Node(dst, val[i]));
        hashMap.get(dst).push(new Node(src, 1 / val[i]));
    }
    
    return hashMap;
}

const dfs = (s, d, visited, graph) => {
    if (!graph.has(s) || !graph.has(d)) return -1.0;
    
    if (s === d) return 1.0;
    visited.set(s);
    const sNodes = graph.get(s);
    
    for (let i = 0; i < sNodes.length; i++) {
        if (!visited.has(sNodes[i].key)) {
            const ans = dfs(sNodes[i].key, d, visited, graph);
            if (ans !== -1.0) {
                return ans * sNodes[i].val;
            }
        }
    }
    
    return -1.0;
}

var calcEquation = function(equations, values, queries) {
    const g = buildGraph(equations, values);
    const result = [];

    for (let i = 0; i < queries.length; i++) {
        result[i] = dfs(queries[i][0], queries[i][1], new Map(), g);
    }
    
    return result;
};