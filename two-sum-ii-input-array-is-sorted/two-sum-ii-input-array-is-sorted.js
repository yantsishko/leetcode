/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(numbers, target) {
//     if (!numbers.length || numbers.length < 2) return [];

//     for (let i = 0; i < numbers.length; i += 1) {
//         for (let j = i + 1; j < numbers.length; j += 1) {
//             const sum = numbers[i] + numbers[j];
//             if (sum === target) {
//                 return [i + 1, j + 1]
//             }
//             if (sum > target) {
//                 break;
//             }
//         }
//         if (numbers[i] > target) {
//             break;
//         }
//     }
    
//     return [];
// };

var twoSum = function(numbers, target) {
    if (!numbers.length || numbers.length < 2) return [];

    let p1 = 0;
    let p2 = numbers.length;
    
    while (p1 < p2) {
        const sum = numbers[p1] + numbers[p2];
        if (sum === target) return [p1 + 1, p2 + 1];
        
        if (sum < target) {
            p1 += 1;
        } else {
            p2 -= 1;
        }
    }
    
    return [];
};