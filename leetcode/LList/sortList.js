const merge = function (head1, head2) {
    const dummyHead = new ListNode(0);
    let temp = dummyHead;
    let temp1 = head1;
    let temp2 = head2;
    while (temp1 !== null && temp2 !== null) {
        if (temp1.val <= temp2.val) {
            temp.next = temp1;
            temp1 = temp1.next;
        }
        else {
            temp.next = temp2;
            temp2 = temp2.next;
        }

        temp = temp.next;
    }

    if (temp1 !== null) {
        temp.next = temp1;
    } 
    else if (temp2 !== null) {
        temp.next = temp2;
    }

    return dummyHead.next;
}

const toSortList = function (head, tail) {
    if (head === null) {
        return head;
    }

    if (head.next === tail) {
        head.next = null;
        return head;
    }

    let slow = head;
    let fast = head;
    while (fast !== tail) {
        slow = slow.next;
        fast = fast.next;
        if (fast !== tail) {
            fast = fast.next;
        }
    }

    let mid = slow;
    
    return merge(toSortList(head, mid), toSortList(mid, tail));
}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    return toSortList(head, null);
};