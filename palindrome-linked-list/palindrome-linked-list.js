/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const stack = [];
    let curr = head;

    while (curr !== null) {
        stack.push(curr.val)

        curr = curr.next;
    }

    curr = head;
    let i = stack.length - 1;
    while (curr !== null) {
        if (curr.val !== stack[i]) return false;

        curr = curr.next;
        i -= 1;
    }

    return true;
};