/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let current = head;
    let num = head.val;
    
    while (current.next !== null) {
        num = num * 2 + current.next.val;
        current = current.next;
    }
    
    return num;
};