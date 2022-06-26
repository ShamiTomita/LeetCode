/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    //move from center outwards
    //there are even palindromes or odd 
    //odd will have a center that can be unique (i-1, i+1, s)
    //even all characters will need to have a twin (i-1, i, s)
    const getDrome = (left, right, s) =>{
        while(left >= 0 && right < s.length){
            if(s[left] !== s[right])break; 
            left--;
            right++;
        }
        return[left + 1, right]
    }
    let max = [0, 1] //we will always have one character, basecase is 1 
    
    for(let i = 0; i < s.length; i++){
        let even = getDrome(i-1, i, s);
        let odd = getDrome(i-1, i+1, s);
        let currentMax = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
        
        max = max[1] - max[0] > currentMax[1] - currentMax[0] ? max : currentMax;
    }
    
    return s.slice(max[0], max[1])
    
    currentMax = Max(even, odd)
    totalMax = Max(currentMax, totalMax)
    
}
