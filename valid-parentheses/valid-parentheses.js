/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (!s.length) return true;
    if (s.length % 2 !== 0) return false;
    const left = ['(', '{', '['];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']',
    };
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (left.includes(s[i])) {
            stack.push(s[i])
        } else {
            const lastElement = stack[stack.length - 1];
            if (lastElement === undefined && !stack.length){
                return false;
            }
            if (map[lastElement] === s[i]) {
                stack.pop()
            } else {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};