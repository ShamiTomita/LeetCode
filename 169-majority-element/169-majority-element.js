/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const fqCounter = {};
    for (let val of nums){
        fqCounter[val] = (fqCounter[val] || 0) + 1
    }
    let current = 0; 
    let maxKey;
    for(let key in fqCounter){
        console.log(fqCounter)
        console.log(fqCounter[key], current)
        if(fqCounter[key] > current){
            current = fqCounter[key];
            maxKey = key
        }
        console.log(current)
    }
    return maxKey;
};