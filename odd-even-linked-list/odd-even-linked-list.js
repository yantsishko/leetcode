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
var oddEvenList = function(head) {
    if (!head || !head.next || !head.next.next) {
        return head;
    }
    let evenList = new ListNode(head.next.val);
    let evenNode = evenList;
    let oddList = new ListNode(head.val);;
    let oddNode = oddList;

    let currentNode = head.next.next;
    let index = 1;
    while (currentNode !== null) {
        if (index % 2 === 0) {
            evenNode.next = new ListNode(currentNode.val);
            evenNode = evenNode.next;
        } else {
            oddNode.next = new ListNode(currentNode.val);
            oddNode = oddNode.next;
        }
        index += 1;
        currentNode = currentNode.next;
        if (currentNode === null) {
            oddNode.next = evenList;
        }
    }

    return oddList;
};
