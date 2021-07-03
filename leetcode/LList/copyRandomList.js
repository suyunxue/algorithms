/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {
    if (head === null) {
            return null;
        }

        var currentNode = head;
        // 1、复制每个结点，如复制结点A得到A1，将结点A1插到结点A后面
        while (currentNode !== null) {
            var cloneNode = new Node(currentNode.val);
            var nextNode = currentNode.next;
            currentNode.next = cloneNode;
            cloneNode.next = nextNode;
            currentNode = nextNode;
        }

        currentNode = head;
        // 重新遍历链表，复制老结点的随机指针给新结点，如A1.random = A.random.next;
        while (currentNode !== null) {
            currentNode.next.random = currentNode.random === null ? null : currentNode.random.next;
            currentNode = currentNode.next.next;
        }

        // 拆分链表，将链表分为原链表和复制后的链表
        currentNode = head;
        var pCloneHead = head.next;
        while (currentNode !== null) {
            var cloneNode = currentNode.next;
            currentNode.next = cloneNode.next;
            cloneNode.next = cloneNode.next === null ? null : cloneNode.next.next;
            currentNode = currentNode.next;
        }

        return pCloneHead;
};


/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {
    var visitedHash = new Map();

    function clone(head) {
        if (head === null) {
            return null;
        }
        
        if (visitedHash.get(head)) {
            return visitedHash.get(head);
        }

        var node = new Node(head.val, null, null);

        visitedHash.set(head, node);

        node.next = clone(head.next);
        node.random  = clone(head.random);

        return node;
    }
    
    return clone(head);
};