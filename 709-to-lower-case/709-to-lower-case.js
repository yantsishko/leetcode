/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);
        if (code >=65 && code <= 90) {
            newStr += String.fromCharCode(code + 32);
        } else {
            newStr += str[i];
        }
    }
    
    return newStr;
    // return str.toLowerCase();
};