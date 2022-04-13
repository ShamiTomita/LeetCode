/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let fqCounter = {}
    let uniqueNums = []
    
    for(val of nums){
        fqCounter[val] = ((fqCounter[val] || 0) +1) 
    }
    console.log(fqCounter)
    for(key in fqCounter){
        if(fqCounter[key] === 1){
            uniqueNums.push(parseInt(key))
        }
    }
    const sum = uniqueNums.reduce((partialSum, a) => partialSum + a, 0)
    return sum
};