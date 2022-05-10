/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    	const swap = (nums, index1, index2) => 
		([nums[index1], nums[index2]] = [nums[index2], nums[index1]]);
	for (let i = 0; i < nums.length; i++){
		let left = i;
		for (let j = i+1; j < nums.length; j++){
			if(nums[left]%2 != 0){
				left = j;
				}
			}
        console.log(nums)
		if ( i !== left) swap(nums, i, left);
		}
	return nums;                      
};

