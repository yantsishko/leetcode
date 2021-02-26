/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    let result = [];
    let stack = [];
    
    for (let i = T.length - 1; i >= 0; i--) {
        while (stack.length && T[i] >= T[stack[stack.length - 1]]) {
            stack.pop();
        }
        result[i] = !stack.length ? 0 : stack[stack.length - 1] - i;
        stack.push(i);
    }
    
    return result;
    
//     const result = [];
    
//     const findNext = (startIndex, value) => {
//         let countDays = 0;
//         let isGrow = false;
        
//         for (let i = startIndex + 1; i < T.length; i += 1) {
//             countDays++;
//             if (T[i] > value) {
//                 isGrow = true;
//                 break;
//             }
//         }
        
//         return isGrow ? countDays : 0;
//     }

//     for (let i = 0; i < T.length; i += 1) {
//         result[i] = findNext(i, T[i]);
//     }
    
//     return result;
};