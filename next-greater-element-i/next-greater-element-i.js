/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    // let result = [];
    let stack = [];
    let map = {};

    nums2.forEach(n => {
        while (stack.length && stack[stack.length - 1] < n) {
            map[stack.pop()] = n;
        }
        stack.push(n);
    });

    // nums1.forEach((num, index) => {
    //     let isFindedIndex = false;
    //     for (let i = 0; i < nums2.length; i++) {
    //         if (nums2[i] === num) {
    //             isFindedIndex = true;
    //         }
    //         if (nums2[i] > num && isFindedIndex) {
    //             result.push(nums2[i]);
    //             return;
    //         }
    //     }
    //     result.push(-1);
    // });

    // return result;
    return nums1.map(n => map[n] || -1);
};