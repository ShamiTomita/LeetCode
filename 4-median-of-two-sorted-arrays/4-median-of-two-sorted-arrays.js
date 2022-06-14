/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}
    let mergedArray = merge(nums1, nums2)
    let initial = 0
    console.log(mergedArray)
    
    
    
    if(mergedArray.length % 2 !== 0){
        let median = Math.floor(mergedArray.length/2)
        console.log(median)
        return mergedArray[median]
    }else{
        let median1 = Math.floor((mergedArray.length-1)/2)
        console.log(median1, mergedArray[median1])
        let median2 = median1+1
        console.log(median2, mergedArray[median2])
        let trueMedian = ((mergedArray[median1]+mergedArray[median2])/2)
        return trueMedian
    }
};