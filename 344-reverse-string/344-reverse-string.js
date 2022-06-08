/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    //switching in place 
    //i is the beginning index and j is the end index
    let i = 0; j = s.length-1
    //do this while i is less than j or once 
    //in other words by the time we reach the middle
    //stop the switching bc all the switches needed have been done 
    while(i < j){
        [s[i], s[j]] = [s[j], s[i]];
        i++;
        j--;
    }
};
