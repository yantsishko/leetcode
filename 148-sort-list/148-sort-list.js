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
var sortList = function(head) {
    if (!head || !head.next) return head;
    
    // 1. find half
    // 2. merge
    
    const merge = (left, right) => {
        let dummy = new ListNode(0);
        let current = dummy;
        
        while (left && right) {
            if (left.val < right.val) {
                current.next = left;
                left = left.next
            } else {
                current.next = right;
                right = right.next
            }
            
            current = current.next;
        }
        
        current.next = left || right;
        
        return dummy.next;
    }
    
    let slow = head;
    let fast = head;
    let prev = null;
    
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    
    prev.next = null;
    const left = sortList(head);
    const right = sortList(slow);
    
    return merge(left, right);
};