/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var nextPermutation = function(nums) {
    let indexOfDec = -1;
    let largerIndex = -1;
    
    const swap = (i , j) => {
        const tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }
    
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i] > nums[i - 1]) {
            indexOfDec = i - 1;
            break;
        }
    }
    
    if (indexOfDec < 0) {
        return nums.sort((a, b) => a - b);
    }
    
    for (let i = indexOfDec + 1; i < nums.length; i++) {
        if (nums[i] > nums[indexOfDec]) {
            largerIndex = i;
        }
    }

    swap(indexOfDec, largerIndex);
    
    const reverseItems = (startIndex) => {
        let i = startIndex;
        let j = nums.length - 1;
        
        while (i < j) {
            swap(i, j);
            i++;
            j--;
        }
    }

    reverseItems(indexOfDec + 1);
    
    return nums;
};