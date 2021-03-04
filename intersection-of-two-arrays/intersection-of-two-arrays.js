/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const map =  new Set();
    const result = new Set();
    
    for (let i = 0; i < nums1.length; i += 1) {
        map.add(nums1[i]);
    }
    
    for (let i = 0; i < nums2.length; i += 1) {
        if (map.has(nums2[i])) {
            result.add(nums2[i]);
        }
    }
    // O(N+M)
    return [...result];
};