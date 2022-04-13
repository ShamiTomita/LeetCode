/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    fqCounter = {}
    for (val of nums){
        fqCounter[val] = (fqCounter[val] || 0) +1
    }
    console.log(fqCounter)
    for (key in fqCounter){
        if (fqCounter[key] === 1){
            return key
        }
    }
};