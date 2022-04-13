/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let count = {}
    let check = []
    for(val of arr){
        count[val] = (count[val] || 0) + 1
    }
    for(key in count){
       check.push(count[key])
    }
    return ((new Set(check).size) === check.length)
};