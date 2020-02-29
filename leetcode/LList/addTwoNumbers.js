/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    var dummyHead = new ListNode(0);
    var p = l1;
    var q = l2;
    var curr = dummyHead;
    var carry = 0;
    while (p || q) {
        var x = q.val ? q.val : 0;
        var y = p.val ? p.val : 0;
        var sum = x + y + carry;
        carry = parseInt(sum / 10);
        curr.next = new ListNode(sum % 10);
        if (q) {
            q = q.next;
        }
        if (p) {
            p = p.next;
        }
    }

    if (carry > 0) {
        curr.next = new ListNode(carry);
    }

    return dummyHead.next;
};