/**
 * @param {number[]} A
 * @return {number}
 * T = O(N);
 * S = O(N)
 */
// var largestUniqueNumber = function(A) { 
//     const map = {};
    
//     for (let i = 0; i < A.length; i++) {
//         map[A[i]] = map[A[i]] ? map[A[i]] + 1 : 1;
//     }
    
//     const keys = Object.keys(map);
    
//     for (let i = keys.length - 1; i >= 0; i--) {
//         if (map[keys[i]] === 1) return keys[i];
//     }
    
//     return -1;
// };

const largestUniqueNumber = arr => {
  const map = {};
  
  for (let i = 0; i < arr.length; i += 1) {
    if (map[arr[i]]) {
      map[arr[i]] += 1;
    } else {
      map[arr[i]] = 1;
    }
  }
  
  let max = -1;
  
  Object.entries(map).forEach(([key, value]) => {
    if (value === 1 && +key > max) {
      max = key;
    }
  });
  
  return max;
}