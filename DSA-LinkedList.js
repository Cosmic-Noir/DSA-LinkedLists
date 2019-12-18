class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertBefore(key, item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value !== key) {
      if (currNode.next === null) {
        return null;
      } else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    let newNode = new _Node(item, currNode.next);
    currNode.next = newNode;
  }

  insertAfter(key, item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value !== key) {
      if (currNode.next === null) {
        return null;
      } else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    let newNode = new _Node(item, currNode.next);
    currNode.next = newNode;
  }

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

  findLast() {
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.next !== null) {
      if (currNode.next === null) {
        return currentNode;
      } else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
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
}

const display = linkedList => {
  console.log(linkedList);
};

const size = linkedList => {
  let currentNode = linkedList.head;
  let count = 0;
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
    count++;
  }
  return count;
};

const isEmpty = linkedList => {
  if (linkedList.head === null) {
    return false;
  } else {
    return true;
  }
};

const main = () => {
  const SLL = new LinkedList();

  SLL.insertFirst("Apollo");
  SLL.insertFirst("Boomer");
  SLL.insertLast("Helo");
  SLL.insertLast("Husker");
  SLL.insertLast("Starbuck");
  SLL.insertLast("Tauhida");
  SLL.remove("Boomer");
  SLL.find("Helo");
  SLL.insertBefore("Boomer", "Athena");
  display(SLL);
  console.log(isEmpty(SLL));
  console.log(size(SLL));
};

main();
