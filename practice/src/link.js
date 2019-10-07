function ListNode(val) {
    this.val = val;
    this.next = null;
}

function LList(head) {
    this.head = new ListNode(head);
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.findPrev = findPrev;
    this.display = display;
}

function find(item) {
    var curNode = this.head;

    while (curNode.val != item) {
        curNode = curNode.next;
    }

    return curNode;
}

function insert(newElement, item) {
    var newNode = new ListNode(newElement);
    var curNode = this.find(item);
    newNode.next = curNode.next;
    curNode.next = newNode;
}

function display() {
    var curNode = this.head;

    while (!(currNode.next == null)) {
        console.log(curNode.next.val);
        curNode = currNode.next;
    }

}

function findPrev(item) {
    var curNode = this.head;

    while (!(curNode.next == null) && (curNode.next.val != item)) {
        curNode = curNode.next;
    }

    return curNode;
}

function remove(item) {
    var prevNode = this.findPrev(item);

    if (!(prevNode.next == null)) {
        prevNode.next = prevNode.next.next;
    }
}

var l1 = new  LList(3);
l1.insert(2, 3);
l1.insert(0, 2);
l1.insert(-4, 0);

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head.next) {
        return false;
    }
    let arr = [];
    let pos = -1;
    let tmp = head;
    
    while (tmp) {
        if (arr.indexOf(tmp.val) !== -1) {
            return true;
        }

        tmp = head.next;
        arr.push(tmp.val);
    }

    return false;
};

let ret = hasCycle(l1);
console.log(ret);