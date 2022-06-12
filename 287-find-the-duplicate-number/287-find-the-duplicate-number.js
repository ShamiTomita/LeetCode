/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let fqCounter = {};
    for(let val of nums){
        fqCounter[val] = (fqCounter[val] || 0) + 1;
    }
    for(let key in fqCounter){
        if(fqCounter[key] > 1) return key
    }
};