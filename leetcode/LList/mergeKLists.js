/**
* Definition for singly-linked list.
* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }
*/
/**
* @param {ListNode[]} lists
* @return {ListNode}
*/
    var mergeKLists = function(lists) {
    let ans = null;
    for (let i = 0; i < lists.length; i++) {
        ans = mergeTwoLists(ans, lists[i]);
    }

    return ans;
};

function mergeTwoLists(a, b) {
    if (a === null || b === null) {
        return a ? a : b;
    }

    let head = new ListNode(0);
    let tail = head;
    let aPtr = a;
    let bPtr = b;
    while (aPtr !== null && bPtr !== null) {
        if (aPtr.val < bPtr.val) {
            tail.next = aPtr;
            aPtr = aPtr.next;
        }
        else {
            tail.next = bPtr;
            bPtr = bPtr.next;
        }

        tail = tail.next;
    }

    tail.next = aPtr ? aPtr : bPtr;
    return head.next;
}