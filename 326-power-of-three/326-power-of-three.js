/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n === 0) return false;
    if (n === 1) return true;
    
    let power = 1;
    while (power < n) {
        power = power * 3
    }
    if (power === n)return true;
    else return false;
};

