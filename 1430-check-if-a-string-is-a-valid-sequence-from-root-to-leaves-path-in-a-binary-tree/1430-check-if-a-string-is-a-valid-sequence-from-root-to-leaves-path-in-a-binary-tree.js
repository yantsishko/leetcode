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
 * @param {number[]} arr
 * @return {boolean}
 */
var isValidSequence = function(root, arr) {
    const n = arr.length;
    
    const isLeaf = (node) => {
        return node.left === null && node.right === null;
    }
    
    const visit = (node, index) => {
        if (node === null) {
            return false;
        }
        
        if (index === n - 1) {
            return node.val === arr[index] && isLeaf(node);
        }
        
        if (node.val === arr[index]) {
            return visit(node.left, index + 1) || visit(node.right, index + 1);
        }
        
        return false;
    }
    
    return visit(root, 0);

};