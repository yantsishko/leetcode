/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let left = 0;
    let right = -1;
    
    let result = 0;
    let oddCount = 0;
    
    while (right < nums.length - 1) {
        right++;
        if (nums[right] % 2 === 1) {
           oddCount++; 
        }
        
        if (oddCount === k) {
            let evenCountL = 1;
            let evenCountR = 1;

            while (nums[left] % 2 === 0 && left <= right) {
                left++;
                evenCountL++
            }

            while (nums[right + 1] % 2 === 0 && right < nums.length - 1) {
                right++;
                evenCountR++;
            }
            
            result += evenCountL * evenCountR;
            
            oddCount--;
            left++;
        }
        
    }
    
    return result;
};