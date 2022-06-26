/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    let length = 1;
    let firstLoop = head;
    while(firstLoop.next != null){
        length++;
        firstLoop = firstLoop.next
    }
    
    let middle = Math.floor(length/2);
    let i = 0;
    let lastLoop = head; 
    let beforeNode, afterNode;
    if(length === 1){
        head = null;
        return head;
    }
    while(lastLoop.next != null){
        if(i === middle-1){//reach the node before;
            beforeNode = lastLoop; 
            console.log("before node:", beforeNode)
            if(beforeNode.next.next) afterNode = beforeNode.next.next;
            else afterNode = null;
        }
        lastLoop = lastLoop.next;
        i++
    }
    
    if(afterNode) beforeNode.next = afterNode;
    else beforeNode.next = null;
    return head
};