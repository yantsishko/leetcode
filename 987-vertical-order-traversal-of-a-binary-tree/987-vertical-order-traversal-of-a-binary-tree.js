/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
    const queue = [{
        node: root,
        y: 0,
        x: 0,
    }];
    
    const res = {};
    
    while (queue.length) {
        const len = queue.length;
        for (let i = 0; i < len; i += 1) {
            const { node, y, x } = queue.shift();
            if (!res[x]) {
                res[x] = [];
            }
            res[x].push({val: node.val, y});
            
            if (node.left) {
                queue.push({
                    node: node.left,
                    y: y + 1,
                    x: x - 1,
                });
            }

            if (node.right) {
                queue.push({
                    node: node.right,
                    y: y + 1,
                    x: x + 1,
                });
            }
        }
    }

    const sortedKeys = Object.keys(res).sort((a, b) => a - b);
    const sorted = sortedKeys.map(key => res[key].sort((a, b) => (a.y === b.y ? a.val - b.val : a.y - b.y)));

    return sorted.map(item => item.map(node => node.val));
};