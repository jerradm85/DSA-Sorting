const { LinkedList } = require("./linked-list");
const mergeSort = require('./merge-sort');

const SLL = new LinkedList();
[89, 30, 25, 32, 72, 70, 51, 42, 25, 24].forEach((item) => {
  SLL.insertLast(item);
});


function llToArr(linkedList) {
  const arr = [];
  // Start at the head
  let currNode = linkedList.head;
  // If the list is empty
  if (!linkedList.head) {
    return null;
  }
  // Check for the item
  while (currNode.next !== null) {
    arr.push(currNode.value);
    // Otherwise, keep looking
    currNode = currNode.next;
  }
  // Found it
  return arr;
}

// convert linked list into an array with llToArr() then sort mergeSort()
const sorted = mergeSort(llToArr(SLL));
console.log(sorted);