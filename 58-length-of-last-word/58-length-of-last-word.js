/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let split = s.split(" ")
    split = split.filter(item => item !== '')
    return split.pop().length
};