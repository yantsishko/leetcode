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
var verticalOrder = function(root) {
     /**
                    3 (0)
                /           \
             9 (-1)         8 (1)
            /       \      /     \
        4 (-2)     0 (0) 1(0)    7 (2)
                /           \
            5 (-1)          2 (1)
                
      0 => [3, 0, 1]
     -1 => [9, 5]
      1 => 8, 2
     -2 => 4
      2 => 7
      
      T = O(N + MlogM)
      S = O(N)
     
     **/
    
    if (!root) return [];

    const queue = [{
        node: root,
        index: 0,
    }];
    
    const result = {};

    while (queue.length) {
        const len = queue.length;
        
        for (let i = 0; i < len; i++) {
            const currNode = queue.shift();
            
            if (!result[currNode.index]) {
                result[currNode.index] = [currNode.node.val];
            } else {
                result[currNode.index].push(currNode.node.val);
            }

            if (currNode.node.left) {
                queue.push({
                    node: currNode.node.left,
                    index: currNode.index - 1,
                });
            }

            if (currNode.node.right) {
                queue.push({
                    node: currNode.node.right,
                    index: currNode.index + 1,
                });
            }
        }
        
    }

    return Object.entries(result).sort((a, b) => a[0] - b[0]).map(item => item[1]);
    
};