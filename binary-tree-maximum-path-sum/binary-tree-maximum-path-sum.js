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
 * @return {number}
 */
var maxPathSum = function(root) {
    let resultMax = Number.MIN_SAFE_INTEGER;

    const findMaxSum = (root) => {
        if (!root) {
            return 0;
        }

        const leftSum = findMaxSum(root.left, resultMax);
        const rightSum = findMaxSum(root.right, resultMax);

        const ms = Math.max(Math.max(leftSum, rightSum) + root.val, root.val);
        const m2 = Math.max(ms, leftSum + rightSum + root.val);

        resultMax = Math.max(m2, resultMax);

        return ms;
    }
    
    findMaxSum(root);
    
    
    return resultMax;
};