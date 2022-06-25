/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    //transform linked list into array
    let length = 0;
    let count = head;
    while(count != null){
        length++;
        count = count.next
    }
    let arr = new Array(length)
    let index = 0;
    let curr = head; 
    while(curr != null){
        arr[index++] = curr.val;
        curr = curr.next;
    }
    let swap = arr[k-1]
    arr[k-1] = arr[arr.length-k]
    arr[arr.length-k] = swap
   
  
    let list = new ListNode();
    list.val = arr[0]; 
    list.temp = null;
    let newNode = list; 
    for(let i = 1; i < arr.length; i++){
        newNode.next = new ListNode(arr[i])
        newNode = newNode.next;
    }
    return list;
};