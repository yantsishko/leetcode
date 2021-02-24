/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if (!height.length) return 0;

    let left = 0;
    let right = height.length - 1;
    let max = 0;
    
    while (left < right) {
        max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }

    }
    
    return max;
};