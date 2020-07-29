/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
  this.node = {};
};

/**
* Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
* @param {number} index
* @return {number}
*/
MyLinkedList.prototype.get = function (index) {
  if (index < 0) return -1;
  let curr = this.node;
  let i = 0;
  while (i < index) {
    if (!curr.next) return -1;
    curr = curr.next;
    i++;
  }
  if (curr.val === undefined || curr.val === null) return -1;
  return curr.val;
};

/**
* Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtHead = function (val) {
  if (this.node && !(this.node.val === null || this.node.val === undefined)) {
    this.node = { val, next: this.node }
  }
  else {
    this.node = { val, next: null }
  }
};

/**
* Append a node of value val to the last element of the linked list. 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtTail = function (val) {
  let curr = this.node;
  while (curr.next) {
    curr = curr.next;
  }
  curr.next = { val, next: null };
};

/**
* Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
* @param {number} index 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index <= 0) return this.addAtHead(val);
  let curr = this.node;
  let i = 0;
  while (i < index - 1) {
    if (!curr || !curr.next) return;
    curr = curr.next;
    i++;
  }
  if (curr.val === undefined || curr.val === null) return;
  curr.next = { val, next: curr.next }
};

/**
* Delete the index-th node in the linked list, if the index is valid. 
* @param {number} index
* @return {void}
*/
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0) return null;
  if (index === 0) return this.node = this.node.next;
  let curr = this.node;
  let i = 0;
  while (i < index - 1) {
    if (!curr.next || !curr.next.next) return;
    curr = curr.next;
    i++;
  }

  if (!curr.next) return;
  if (!curr.next.next) return curr.next = null;
  curr.next = curr.next.next;
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