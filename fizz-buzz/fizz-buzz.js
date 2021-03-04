/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const result = [];
    if (!n) return result;
    for (let i = 1; i <= n; i++) {
        const multiplesThree = i % 3 === 0;
        const multiplesFive = i % 5 === 0;

        if (multiplesThree && multiplesFive) {
            result.push('FizzBuzz');
            continue;
        } else if (multiplesThree) {
           result.push('Fizz');
            continue;
        } else if (multiplesFive) {
           result.push('Buzz');
            continue;
        } else {
            result.push(i.toString());
        }
    }
    
    return result;
};