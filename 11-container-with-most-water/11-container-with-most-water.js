/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    //measuring the distances between indices by comparing the index
    //multiply the the shorter of the two "poles" by the distances on indices between it and the other pole 
    //Start with the maximum width container and go to a shorter width container if there is a vertical line longer than the current containers shorter line. This way we are compromising on the width but we are looking forward to a longer length container.
    //so we need two endpoint variables, the longest endpoint will stay as is and the next shortest endpoint will be moving 
    
    let i = 0, maxArea = 0, j = height.length-1;
    while (i < j){
         //store the highest endpoint on the left
        maxArea = Math.max(maxArea, Math.min(height[i], height[j]) * (j-i))
        if(height[i] <= height[j]){
            i++
        }else{
            j--
        }
    }
    return maxArea
};

