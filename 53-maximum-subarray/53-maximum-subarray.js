const maxSubArray = nums => {
    let max = nums[0];
    let current = Math.max(max, 0);
    //the current is either 0 or the 0 index
    
    for (let i = 1; i < nums.length; i += 1) {
        //since we've already covered the first index, we can head to the next one
      
        //add the next index into the current 
        current += nums[i];
        
        
        //here we decide the new max by comparing the old max (on the first go round the first index and the current or the running sum )
        //if the next in the series increases the sum then that becomes the new max
        max = Math.max(max, current);
        
        
        //anytime the current drops below 0, we reset or we continue and keep adding
        current = Math.max(current, 0);
      
    }
    
    return max;
};