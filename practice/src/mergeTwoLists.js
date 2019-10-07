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

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var head = new ListNode(0);
    var curr = head;

    while (l1 && l2) {

        if (l1.val < l2.val) {
            curr.next = new ListNode(l1.val);
            l1 = l1.next;

            curr = curr.next;
        }
        else if (l1.val > l2.val) {
            curr.next = new ListNode(l2.val);
            curr = curr.next;

            l2 = l2.next;
        }
        else if (l1.val === l2.val) {
            curr.next = new ListNode(l1.val);
            curr = curr.next;

            curr.next = new ListNode(l2.val);
            curr = curr.next;

            l1 = l1.next;
            l2 = l2.next
        }

    } 
    
    if (l1) {
        curr.next = l1;
    }
    else if (l2) {
        curr.next = l2;
    }
    
    return head.next;
};    

var l1 = new  LList(1);
l1.insert(2, 1);
l1.insert(4, 2);

var l2 = new LList(1);
l2.insert(3, 1);
l2.insert(4, 3);

console.log(l1.head, l2.head);

let ret = mergeTwoLists(l1.head, l2.head);

var mergeTwoLists = function (l1, l2) {
    var first = new ListNode(1);
    var second = first;

    while (l1 || l2) {
        
        if (!l1 && l2) {
            second.next = l2;
        }
        else if (!l2 && l1) {
            second.next = l1;
        }
        else {
            if (l1.val <= l2.val) {
                second.next = l1;
                l1 = l1.next;
            }
            else {
                second.next = l2;
                l2 = l2.next;
            }
        }

        second = second.next;

    }

    return first.next;

}

console.log(ret);