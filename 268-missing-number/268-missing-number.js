/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
 //I can sort the array, if there is a gap between numbers larger than one then that would be my missing number 
    //
    if(nums[0] === 1 && nums.length === 1 ) return 0; //if theres only 1
    if(nums.length === 1) return nums[0]+1 //if theres only 0
    console.log(nums.length, nums.at(-1))
    function selectionSort(arr) {
      const swap = (arr, idx1, idx2) =>
        ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

      for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[lowest] > arr[j]) {
            lowest = j;
          }
        }
        if (i !== lowest) swap(arr, i, lowest);
      }

      return arr;
    }
   
    
    let newArray = selectionSort(nums);
    //[0, 1, 3]
    //the last item in an a sorted array can not be missing
    for(let i = 0; i < newArray.length; i++){
        //if the item i + i is not equal to the next index item then it is the                  missing number
        //
        if(newArray[i]+1 <= newArray.length && newArray[i]+1 !== newArray[i+1]) {
                  return newArray[i]+1; 
            }
    }
    return 0;
};