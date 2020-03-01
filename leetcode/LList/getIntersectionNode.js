/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * x`@return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    if (headA === null || headB === null) {
        return null;
    }

    var pA = headA;
    var pB = headB;
    while (pA !== pB) {
        if (pA === null) {
            pA = headB;
        } else {
            pA = pA.next;
        }
        if (pB === null) {
            pB = headA;
        } else {
            pB = pB.next;
        }
    }

    return pA;
};