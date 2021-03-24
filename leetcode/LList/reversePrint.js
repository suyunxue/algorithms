/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
 var reversePrint = function(head) {
    var stack = [];

    var node = head;
    while (node !== null) {
        stack.push(node);
        node = node.next;
    }

    var popNode;
    var print = [];
    while (stack.length) {
        popNode = stack.pop();
        print.push(popNode.val);
    }
    
    return print;
};