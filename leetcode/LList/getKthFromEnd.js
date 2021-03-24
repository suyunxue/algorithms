/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var getKthFromEnd = function(head, k) {
    var cur = head;
    var now = head;

    var i = 0;
    while (cur !== null && i++ < k) {
        cur = cur.next;
    }

    while (cur !== null) {
        now = now.next;
        cur = cur.next;
    }

    return now;
};