/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false
    }
    let sArray = s.split('')
    let tArray = t.split('')
    let fqCounter1 = {}
    let fqCounter2 = {}
    
    for(let val of sArray){
        fqCounter1[val] = (fqCounter1[val] || 0) + 1;
    }
    for(let val of tArray){
        fqCounter2[val] = (fqCounter2[val] || 0) + 1;
    }
    
    for (let key in fqCounter1){
        if(!(key in fqCounter2)){
            return false;
        }
        if(fqCounter2[key] !== fqCounter1[key]){
            return false
        }
    }
    return true;
};