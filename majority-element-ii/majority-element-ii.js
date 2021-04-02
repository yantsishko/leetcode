/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    // max possible 2 candidates
    let counter1 = 0;
    let counter2 = 0;
    let candidate1 = null;
    let candidate2 = null;
    let result = [];
    
    for(let i = 0; i < nums.length; i += 1) {
       if(candidate1 === nums[i]){
           counter1 += 1;
       } else if(candidate2 === nums[i]){
            counter2 += 1;
        } else if(counter1 === 0){
            candidate1 = nums[i];
            counter1 += 1;
        } else if(counter2 === 0){
            candidate2 = nums[i];
            counter2 += 1;
        } else{
            counter1--;
            counter2--;
        }        
    }
    
    counter1 = 0;
    counter2 = 0;
    
    for (let i = 0; i < nums.length; i += 1) {
        if (candidate1 !== null && candidate1 === nums[i]) counter1 += 1;
        if (candidate2 !== null && candidate2 === nums[i]) counter2 += 1;
    }
    
    if (counter1 > nums.length / 3) result.push(candidate1);
    if (counter2 > nums.length / 3) result.push(candidate2);
    
    return result;
};