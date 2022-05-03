/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n === 0) return false;
    if (n === 1) return true; 
    let i = 0;
    let power = 1
    while (power < n){
        power = power * 2;
    }
    if(power === n)return true;
    else return false;
};