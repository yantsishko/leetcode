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
var insertionSortList = function(head) {
    const psHead = new ListNode();
    let current = head;
    let prevNode = null;
    let nextNode = null;
    
    while (current !== null) {
        prevNode = psHead;
        nextNode = psHead.next;
        
        while (nextNode !== null) {
            if (current.val < nextNode.val) {
                break;
            }
            prevNode = nextNode;
            nextNode = nextNode.next;
        }
        
        const nextLink = current.next;
        current.next = nextNode;
        prevNode.next = current;
        
        current = nextLink;
    }
    
    return psHead.next;
};