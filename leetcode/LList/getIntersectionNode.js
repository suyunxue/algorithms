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
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null) {
        return null;
    }

    var count1 = 0;
    var p1 = headA;
    while (p1 !== null) {
        p1 = p1.next;
        count1++;
    }

    var count2 = 0;
    var p2 = headB;
    while (p2 !== null) {
        p2 = p2.next;
        count2++;
    }

    var flag = count1 - count2;
    if (flag > 0) {
        while (flag > 0) {
            headA = headA.next;
            flag--;
        }
        while (headA !== headB) {
            headA = headA.next;
            headB = headB.next;
        }

        return headA;
    }

    if (flag <= 0) {
        while (flag < 0) {
            headB = headB.next;
            flag++;
        }
        while (headA !== headB) {
            headB = headB.next;
            headA = headA.next;
        }

        return headA;
    }

    return null;
};