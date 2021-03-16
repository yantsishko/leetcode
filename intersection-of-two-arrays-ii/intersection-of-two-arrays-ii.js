/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersect = function(nums1, nums2) {
//     const hash1 = {};
//     const hash2 = {};
//     const result = [];

//     for (let i = 0 ; i < nums1.length; i += 1) {
//         hash1[nums1[i]] = hash1[nums1[i]] ? hash1[nums1[i]] + 1 : 1;
//     }
//     for (let i = 0 ; i < nums2.length; i += 1) {
//         hash2[nums2[i]] = hash2[nums2[i]] ? hash2[nums2[i]] + 1 : 1;
//     }

//     if (nums1.length > nums2.length) {
//         for (const key of Object.keys(hash2)) {
//             if (hash1[key]) {
//                 for (let j = 0; j < Math.min(hash1[key], hash2[key]); j += 1) {
//                     result.push(key);
//                 }
//             }
//         }
//     } else {
//         for (const key of Object.keys(hash1)) {
//             if (hash2[key]) {
//                 for (let j = 0; j < Math.min(hash1[key], hash2[key]); j += 1) {
//                     result.push(key);
//                 }
//             }
//         }
//     }
    
//     return result;
// };

const cm = function(a, b) {
    return a - b;
}

var intersect = function(nums1, nums2) {
    const result = [];
    
    nums1.sort(cm);
    nums2.sort(cm);

    let p1 = 0;
    let p2 = 0;
    
    while (p1 < nums1.length && p2 < nums2.length) {
        if (nums1[p1] === nums2[p2]) {
            result.push(nums1[p1]);
            p1 += 1;
            p2 += 1;
        } else if (nums1[p1] > nums2[p2]) {
            p2 += 1;
        } else {
            p1 += 1;
        }
    }
    
    return result;
};
