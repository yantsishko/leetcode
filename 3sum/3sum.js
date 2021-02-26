/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) {
        return [];
    }
    
    const result = [];
    const set = new Set();

    nums.sort((a, b) => a - b);

    const sum2 = (startIndex, findSum, firstVal) => {
        let start = startIndex + 1;
        let end = nums.length - 1;
        
        while (start < end) {
            if (nums[start] + nums[end] === findSum) {
                if (!set.has(`${firstVal}${nums[start]}${nums[end]}`)) {
                    result.push([firstVal, nums[start], nums[end]]);
                    set.add(`${firstVal}${nums[start]}${nums[end]}`);
                }
            }

            if (nums[start] + nums[end] > findSum) {
                end--;
            } else if (nums[start] + nums[end] <= findSum) {
                start++;
            }
        }
    }
    
    for (let i = 0; i < nums.length - 2; i++) {
        sum2(i, 0 - nums[i], nums[i]);
    }
  
//     const result = [];
//     const set = new Set();

//     nums.sort((a, b) => a - b);

//     for (let i = 0; i < nums.length; i++){
//          for (let j = i + 1; j < nums.length; j++){
//             let sum = nums[i] + nums[j];
//             for (let k = j + 1; k < nums.length; k++){           
//               if (sum + nums[k] === 0) {
//                 const answer = [nums[i], nums[j], nums[k]];
//                 if (!set.has(answer.join(''))) {
//                   set.add(answer.join(''));
//                   result.push([nums[i], nums[j], nums[k]]);
//                 }
//               }
//           }
//         }
//     }

    return result;

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//     if (nums.length < 3) return [];
//     const sortedNums = nums.sort((a,b) => a - b);
//     const result = [];
    
//     const find2Sum = (k, index) => {
//         let left = index;
//         let right = sortedNums.length - 1;

//         while (left < right) {
//             const sum = sortedNums[left] + sortedNums[right];

//             if (sum === k) {
//                 result.push([-k, sortedNums[left], sortedNums[right]]);
//                 while (sortedNums[left] === sortedNums[left + 1]) { left++; }
//                 while (sortedNums[right] === sortedNums[right - 1]) { right--; }
//             }
//             if (sum < k) {
//                 left++;
//             } else {
//                 right--;
//             }
//         }
//     }
    
// //     const find2SumHash = (k) => {
// //         const hash = new Map();
// //         for (let i = 0; i < nums.length; i += 1) {
// //             if (hash.has(k - nums[i])) {
// //                 result.push([k === 0 ? 0 : k * -1, nums[i], k - nums[i]]);
// //                 break;
// //             }
// //             hash.set(nums[i])
// //         }
// //     }
    
//     for (let i = 0; i < sortedNums.length; i += 1) {
//         if ( i > 0 && sortedNums[i] === sortedNums[i-1]){
//             continue;
//         }
//         find2Sum(-sortedNums[i], i + 1);
//     }

//     return result;
};