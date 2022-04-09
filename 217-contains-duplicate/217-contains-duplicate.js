/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
 let setArray = ([...new Set(nums)])
 if (setArray.length === nums.length){
     return false
 }else{
     return true
 }
};