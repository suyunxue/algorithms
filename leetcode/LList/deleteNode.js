function deleteNode(pListHead, pToBeDeleted) {
    if (!pListHead || !pToBeDeleted) {
        return;
    }

    if (pToBeDeleted.next !== null) {
        var pNext = pToBeDeleted.next;
        pToBeDeleted.next = pNext.next;
        pToBeDeleted.val = pNext.val;

        delete pNext;
        pNext = null;
    }
    else {
        var pTemp = pListHead;
        while (pTemp.next !== pToBeDeleted) {
            pTemp = pTemp.next;
        }
        pTemp.next = null;
        delete pToBeDeleted;
        pToBeDeleted = null;
    }
}