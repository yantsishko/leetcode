/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


var mergeTwoLists = function(l1, l2) {
    const mergedList = merge(l1, l2);

    return mergedList;
};

function merge(node1, node2){
    if (!node1 || !node2) {
        return node1 || node2;
    }

    if (node1.val < node2.val) {
        node1.next = merge(node1.next, node2);
        return node1;
    }

    node2.next = merge(node1, node2.next);
    return node2;
}
    