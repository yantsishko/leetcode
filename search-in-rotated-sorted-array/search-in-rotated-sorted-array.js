/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * [ 0, 1, 2, 4, 5, 6, 7 ]
 */
var search = function(nums, target) {
    let pivot = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            pivot = i + 1;
            break;
        }
    }
    
    let left = 0;
    let right = nums.length - 1;
    
    if (target >= nums[pivot] && target <= nums[nums.length - 1]) {
        left = pivot;
    } else {
        right = pivot - 1;
    }
    
    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        if (nums[middle] < target) {
            left = middle + 1;
        } else if (nums[middle] > target) {
            right = middle - 1;
        } else {
            return middle;
        }
    }
    
    return -1;
};