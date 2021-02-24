/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let stack = 0;
    for (let i = 0; i < s.length; i ++) {
        let char = s[i];
        if (char === '(' || char === '*') {
            stack++;
        } else if (char === ')') {
            if (stack < 1) {
                return false;
            } else {
                stack--;
            }
        }
    }
    
    stack = 0;
    for (let i = s.length - 1; i >= 0; i --) {
        let char = s[i];
        if (char === ')' || char === '*') {
            stack++;
        } else if (char === '(') {
            if (stack < 1) {
                return false;
            } else {
                stack--;
            }
        }
    }
    
    return true;
};