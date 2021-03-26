/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const result = [];
    
    for (let i = 1; i <= n; i++) {
        const isThreeMultiplay = i % 3 === 0;
        const isFiveMultiplay = i % 5 === 0;
        if (isFiveMultiplay && isThreeMultiplay) {
            result.push('FizzBuzz');
        } else if (isThreeMultiplay) {
            result.push('Fizz');
        } else if (isFiveMultiplay) {
            result.push('Buzz');
        } else {
            result.push(i + '');
        }
    }
    
    return result;
};
































// /**
//  * @param {number} n
//  * @return {string[]}
//  */
// var fizzBuzz = function(n) {
//     const result = [];
//     if (!n) return result;
//     for (let i = 1; i <= n; i++) {
//         const multiplesThree = i % 3 === 0;
//         const multiplesFive = i % 5 === 0;

//         if (multiplesThree && multiplesFive) {
//             result.push('FizzBuzz');
//             continue;
//         } else if (multiplesThree) {
//            result.push('Fizz');
//             continue;
//         } else if (multiplesFive) {
//            result.push('Buzz');
//             continue;
//         } else {
//             result.push(i.toString());
//         }
//     }
    
//     return result;
// };