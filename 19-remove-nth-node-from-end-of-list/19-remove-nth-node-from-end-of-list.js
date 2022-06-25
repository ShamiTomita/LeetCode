/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */


var removeNthFromEnd = function(head, n) {
    let fast = head, slow = head //this is the initialization, starting at the head
    for (let i = 0; i < n; i++) fast = fast.next //this is the head start that we give to fast, by having it move towards the nth item at the beginning, we add that delay/stagger for the slow which will reach the nth item from the end 
    if (!fast) return head.next //this is the edgecase 
    while (fast.next) fast = fast.next, slow = slow.next //while there is a next item in the fast lane, move fast and slow 
    slow.next = slow.next.next //is this so that it catches up to the nth node by the time fast reaches the end?
    return head
};