/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (!head) return head;
    let currentNode = head.next;
    let prevNode = head;
    while (currentNode !== null) {
        if (currentNode.val === prevNode.val) {
            prevNode.next = currentNode.next;
            currentNode = currentNode.next;
        } else {
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
    }
    
    return head;
};