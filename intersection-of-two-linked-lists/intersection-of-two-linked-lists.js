/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    const hash = new Map();
    
    let currentNodeA = headA;
    let currentNodeB = headB;
    
    while (currentNodeA !== null) {
        hash.set(currentNodeA);
        currentNodeA = currentNodeA.next;
    }
    
    
    while (currentNodeB !== null) {
        if (hash.has(currentNodeB)) return currentNodeB;
        currentNodeB = currentNodeB.next;
    }
    
    return null;
};