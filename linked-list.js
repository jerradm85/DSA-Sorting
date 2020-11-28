class LinkedList {
  constructor() {
    this.head = null;
  }

  // taken from lecture 10/13/20 DSA-LinkeList
  insert(data) { // insert at the end
    if (this.head === null) {
      this.head = new _Node(data);
      return;
    }
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = new _Node(data);
  }
  // END taken from lecture 10/13/20 DSA-LinkeList

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertCycleLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null && tempNode.next !== this.head) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, this.head);
    }
  }

  insertBefore(newNode, searchNode) {
    if (this.head === null) {
      this.insertFirst(newNode);
    }
    // Start at the head
    let currNode = this.head;
    // Check for the item
    while (currNode.next.value !== searchNode) {
      /* Return null if it's the end of the list 
          and the item is not on the list */
      if (currNode.next === null) {
        return null;
      } else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    currNode.next = new _Node(newNode, currNode.next);
  }

  insertAfter(newNode, searchNode) {
    if (this.head === null) {
      this.insertFirst(newNode);
    }
    // Start at the head
    let currNode = this.head;
    // Check for the item
    while (currNode.value !== searchNode) {
      /* Return null if it's the end of the list 
          and the item is not on the list */
      if (currNode.next === null) {
        return null;
      } else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    currNode.next = new _Node(newNode, currNode.next);
  }

  insertAt(newNode, position) {
    let currentPosition = 1;

    // If the list is empty
    if (!this.head) {
      console.log("List is empty. Position not available");
      return;
    }

    // Start at the head
    let currNode = this.head;

    while (currentPosition !== position - 1) {
      if (currentPosition < position && currNode.next !== null) {
        currNode = currNode.next;
        currentPosition++;
      } else {
        console.log(
          `Position ${position} is greater than Linked List size ${
            currentPosition + 1
          }`
        );
        return;
      }
    }
    currNode.next = new _Node(newNode, currNode.next);
  }

  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
           and the item is not on the list */
      if (currNode.next === null) {
        return null;
      } else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }

  findAt(position) {
    let currentPosition = 1;
  
    // If the list is empty
    if (!this.head) {
      console.log("List is empty. Position not available");
      return;
    }
  
    // Start at the head
    let currNode = this.head;
  
    while (currentPosition !== position) {
      if (currentPosition < position && currNode.next !== null) {
        currNode = currNode.next;
        currentPosition++;
      } else {
        console.log(
          `Position ${position} is greater than Linked List size ${
            currentPosition + 1
          }`
        );
        return;
      }
    }
  
    // Found it
    return currNode;
  }

  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    previousNode.next = currNode.next;
  }

  // taken from lecture 10/13/20 DSA-LinkeList
  deleteFirst() {
    if (this.head === null) {
      return;
    }
    this.head = this.head.next;
  }
  // END taken from lecture 10/13/20 DSA-LinkeList
}

class _Node {
  constructor(value, next) {
      this.value = value;
      this.next = next;
  }
}

module.exports = { LinkedList, _Node };