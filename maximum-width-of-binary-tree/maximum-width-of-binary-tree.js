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
var widthOfBinaryTree = function(root) {
    const queue = [{
        root,
        pos: BigInt(0),
    }];
    let maxWidth = BigInt(0);

    while (queue.length) {
        const length = queue.length;
        let min = BigInt(0);
        let pos = BigInt(0), currentRoot;

        for (let i = 0; i < length; i += 1) {
            const data = queue.shift();
            pos = data.pos;
            currentRoot = data.root;

            if(i === 0) min = pos;

            if (currentRoot.left) {
                queue.push({root: currentRoot.left, pos: BigInt(pos * BigInt(2))});
            }
            if (currentRoot.right) {
                queue.push({root: currentRoot.right, pos: BigInt(pos * BigInt(2) + BigInt(1))});
            }
        }

        const levelWidth = (pos - min + BigInt(1)) || BigInt(0);

        maxWidth = levelWidth > maxWidth ? levelWidth : maxWidth;
    }

    return maxWidth;
};