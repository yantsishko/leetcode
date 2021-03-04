/**
 * @param {string} s
 * @return {string}
 T = O( N )
 S = O( N )
 */
var minRemoveToMakeValid = function(s) {
    let result = s.split('');
    const indexes = [];
    const stack = [];
     
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            indexes.push(i);
            stack.push('(');
        }
 
        if (s[i] === ')') {
            if ((!stack.length || stack[stack.length - 1] === ')')) {
                stack.push(')');
                indexes.push(i);
            } else {
                stack.pop();
                indexes.pop();
            }
        }
    }
 
    for (let i = indexes.length - 1; i >= 0; i--) {
        result[indexes[i]] = '';
        //result.splice(indexes[i], 1);
    }
     
    return result.join('');
};