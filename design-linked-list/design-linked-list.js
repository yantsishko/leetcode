function Node(val, next) {
    this.val = val ? val : null;
    this.next = next ? next : null;
}

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.head = new Node();
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let currentNode = this.head.next;
    let count = 0;
    while (currentNode && count !== index) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode ? currentNode.val : -1;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const node = new Node(val);
    node.next = this.head.next;
    this.head.next = node;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let currentNode = this.head;
    while (currentNode.next) currentNode = currentNode.next;
    const node = new Node(val);
    currentNode.next = node;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    let currentNode = this.head;
    let count = 0;
    while (currentNode && count !== index) {
      currentNode = currentNode.next;
      count++;
    }
    if (currentNode) {
      const node = new Node(val);
      node.next = currentNode.next;
      currentNode.next = node;
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    let currentNode = this.head;
    let count = 0;
    while (currentNode.next && count !== index) {
      currentNode = currentNode.next;
      count++;
    }
    if (currentNode.next) currentNode.next = currentNode.next.next;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */