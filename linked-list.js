/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    for (let val of vals) this.push(val);
  }  // END LinkedList


  finder(idx) {
    /* returns a node at idx position */
    let counter = 0;
    let finder = this.head;
    // Handle an empty list
    if (finder == null) {
      throw new Error("Nothing to remove - List empty")
    }  // END if

    while (counter < idx) {
      if (finder.next) {
        finder = finder.next;
        counter++;
      } else {
        throw new Error("ERROR: List does not contain the requested index number")
      }  // END if
    }  // END while loop
    return finder;
  }  // END finder


/** traverse the list (used to verify list changes) */
  traverse() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.val);
      currentNode = currentNode.next;
    }
  }  // END traverse()

  /** push(val): add new value to end of list. */

  push(val) {
    /* add new value to end of list */
    const newNode = new Node(val);
    // if ther is nothing in the list previously
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    // Set the tail of the LinkedList & the next of the legacy node
    this.tail.next = newNode;
    this.tail = newNode;
    }  // END push()


  /** unshift(val): add new value to start of list. */

  unshift(val) {
    /* add new value to start of list */
    const newNode = new Node(val);
    // if there is nothing in the list previously
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    /* If there are values already in the list, update the LinkedList head, and next variable if the new node */
    newNode.next = this.head;
    this.head = newNode;
    }  // END unshift()


  /** pop(): return & remove last item. */

  pop() {
    /* return & remove last item */
    const removeNode = this.tail;
    let currentNode = this.head;

    // Check if the list is empty
    if (!currentNode) {
      /* Throw error as there is nothing to remove */
      throw new Error("Nothing to POP - List empty")
    } // END if

    // If there is only one Node in the list
    if (currentNode == removeNode) {
      this.head = null;
      this.tail = null;
      return currentNode;
    } // END if

    // Find and remove final node
    while (currentNode){
        // find the penultimate node
        if (currentNode.next == removeNode) {
          /* remove the next reference to the removed node & set the tail */
          currentNode.next = null;
          this.tail = currentNode;
          return removeNode;
        } // END if
        // Continue to loop
        currentNode = currentNode.next;
      } // END While
  }  // END pop()


  /** shift(): return & remove first item. */

  shift() {
    /* return & remove first item. */
    if (this.head == null) {
      /* Throw error as list is empty */
      throw new Error("Nothing to remove - List empty")
    }  // END if
    const remove = this.head;
    this.head = this.head.next;
    return remove;
  }  // END shift()


  /** getAt(idx): get val at idx. */

  getAt(idx) {
    /* Retrieve value at index position idx. Throws error if index is invalid.*/
    let counter = 0;
    let finder = this.head;
    // Handle an empty list
    if (finder == null) {
      throw new Error("Nothing to remove - List empty")
    }  // END if

    while (counter < idx) {
      if (finder.next) {
        finder = finder.next;
        counter++;
      } else {
        throw new Error("ERROR: List does not contain the requested index number")
      }  // END if
    }  // END while loop
    return `This is my best guess: ${finder.val}`
    }  // END getAt()


  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    /* Set value of node at index position idx to val */

    let counter = 0;
    let finder = this.head;
    // Handle an empty list
    if (finder == null) {
      throw new Error("ERROR: List is empty")
    }  // END if

    // retrieve the required index element
    while (counter < idx) {
      if (finder.next) {
        finder = finder.next;
        counter++;
      } else {
        throw new Error("ERROR: List does not contain the requested index number")
      }  // END if
    }  // END while loop

    // set the value to the passed in argument
    finder.val = val;
  }  // END setAt()

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    /*  Insert a new node at position idx with value val. */
    let counter = 0;
    let finder = this.head;
    // Handle an empty list
    if (finder == null) {
      throw new Error("ERROR: List is empty")
    }  // END if
    // Handle if insert is at very start of list (index position 0)
    if (idx == 0) {
      throw new Error("ERROR: Cannot insert at position 0; use unshift method instead")
    }  // END if

    // retrieve the required index element
    while (counter < idx && finder.next) {
        finder = finder.next;
        counter++;
      if (counter < idx) {
        throw new Error("ERROR: List does not contain the requested index number")
      }  // END if
    }  // END while loop
    const newNode = new Node(val);
    newNode.next = finder;

    // retrieve the node prior to the required index element
    let previous = this.head;
    let counter2 = 0
    // if the insert is not at index position 1, find it
    if (counter2 != idx-1) {
      while (counter2 < idx-1) {
        if (previous.next) {
          previous = previous.next;
          counter++;
        } else {
          throw new Error("ERROR: Cannot insert at end of list; use push method instead")
        }  // END if
      }  // END while loop
    }  // END if
    // Update the previous node to have the inserted node next
    previous.next = newNode;
    return true;
  }  // END insertAt()

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {
    
  }

}

// module.exports = LinkedList;



// Seed values (IIFE)
const emptyList = (function() {
  console.log("emptyList has been seeded:");
  let emptyList = new LinkedList();
  return emptyList;
  })();

const testList = (function() {
  console.log("testList has been seeded:");
  let testList = new LinkedList();
  testList.push("Car 1");
  testList.push("Car 2");
  testList.unshift("Engine");
  testList.traverse();
  return testList;
})();

