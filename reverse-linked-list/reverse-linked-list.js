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
// var reverseList = function(head) {
//     let curentNode = head;
//     let prev = null;

//     while (curentNode !== null) {
//         const nextTemp = curentNode.next;
//         curentNode.next = prev;
//         prev = curentNode;
//         curentNode = nextTemp;
//     }
    
//     return prev;
// };

var reverseList = function(head) {
    if (head === null || head.next === null) return head;    
    
    const list = reverseList(head.next);
    
    head.next.next = head;
    head.next = null;
    
    return list;
};