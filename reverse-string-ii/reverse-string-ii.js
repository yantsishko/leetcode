/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    if (k === 1) return s;
    let result = '';

    const substrCount = Math.floor(s.length / (2 * k));

    for (let i = 0; i < substrCount; i++) {
        result += reverse(s.substr(i * 2 * k, 2 * k), k);
    }

    return result + reverse(s.substr(substrCount * 2 * k, s.length - (substrCount * 2 * k)), k);
};

function reverse(str, k) {
    const strArr = Array.from(str);
    
    let length = strArr.length - k;
    if (length < k) {
        length = k;
    }

    for (let i=0; i < Math.floor(length / 2); i++) {
        const temp = strArr[i];
        strArr[i] = strArr[length - 1 - i];
        strArr[length - 1 - i] = temp;
    }

    return strArr.join('');
}
