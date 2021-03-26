function cycleNode(head) {
    if (head === null) {
        return null;
    }

    first = head;
    second = head;
    while (first !== null && first.next !== null) {
        first = first.next.next;
        second = second.next;

        if (first === second) {
            return first;
        }
    }

    return null;
}

function getCycleLength(head) {
    var node = cycleNode(head);
    if (node === null) {
        return 0;
    }

    var length = 1;
    var current = node.next;
    while (current !== node) {
        length++;
        current = current.next;
    }

    return length;
}