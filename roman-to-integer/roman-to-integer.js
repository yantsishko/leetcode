/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
//     const map = {
//         'I': 1,
//         'V': 5,
//         'X': 10,
//         'L': 50,
//         'C': 100,
//         'D': 500,
//         'M': 1000,
//     };
//     let number = 0;
//     let i = 0;
//     while (i < s.length) {
//         if (s[i] === 'I' && (s[i + 1] === 'V' || s[i + 1] === 'X')) {
//             number += map[s[i + 1]] - map[s[i]];
//             i += 2;
//         } else if (s[i] === 'X' && (s[i + 1] === 'L' || s[i + 1] === 'C')) {
//             number += map[s[i + 1]] - map[s[i]];
//             i += 2;
//         } else if (s[i] === 'C' && (s[i + 1] === 'D' || s[i + 1] === 'M')) {
//             number += map[s[i + 1]] - map[s[i]];
//             i += 2;
//         } else {
//             number += map[s[i]];
//             i += 1;
//         }
//     }
    
//     return number;
    
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };
    let sum = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const charNext = s[i + 1];

        if (map[char] < map[charNext]) {
            sum += map[charNext] - map[char];
            i++;
        } else {
            sum += map[char];
        }
    }

    return sum;

};