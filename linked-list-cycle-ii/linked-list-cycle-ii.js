/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (!head) return null;
    
    let slow = head;
    let index = 0;

    while (slow.next !== null) {
        slow.index = index;
        
        if (slow.next.index !== undefined) {
            return slow.next;
        }
        
        slow = slow.next;
        index++;
    }
    
    return null;
};