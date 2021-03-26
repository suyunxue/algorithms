function entryNodeOfLoop(pHead) {
    if (pHead.next === null || pHead.next.next === null) {
        return null;
    }
    var slow = pHead.next;
    var fast = pHead.next.next;
    while (fast !== null) {
        if (fast === slow) {
            fast = pHead;
            while (fast !== slow) {
                fast = fast.next;
                slow = slow.next;
            }
            return fast;
        }
        fast = fast.next.next;
        slow = slow.next;
    }
    return null;
}
