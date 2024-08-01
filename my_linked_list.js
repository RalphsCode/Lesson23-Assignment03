console.log("JS is running.")

// class Node {
//     constructor(val){
//         this.val=val;
//         this.next=null;
//     }
// } 

class Node {
    constructor(val, next = "null") {
        this.val = val;
        this.next = next;
    }
}

// const firstList = new Node('google', new Node('amazon', new Node('twitter', new Node('facebook'))));

class LinkedList {
    constructor() {
        this.head = null ;
        this.tail = null;
    }
    traverse() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.val);
            currentNode = currentNode.next;
        }
    } 

    find(val) {
        let currentNode = this.head;
        while (currentNode) {
            console.log('currentNode:', currentNode.val);
            if (currentNode.val == val) {
                return (`Found ${val}.`);
            } 
            else {
                currentNode = currentNode.next;
            }  // END Else
        
    }  // END while loop
    return "NOT FOUND"
    }  // END find()

    append(val) {
        const newNode = new Node(val);
        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        }
    
}  // END LinkedList Class

