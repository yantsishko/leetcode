/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    if (num.length ===k || num === '') {
        return "0";
    }
    const stack = [];
    let removed = 0;

    for(let n of num) {
        while(stack.length && n < stack[stack.length - 1] && removed < k) {
            stack.pop();
            removed += 1;
        }
        stack.push(n);
    }

    while(removed < k) {
        stack.pop();
        removed += 1;
    }

    while(stack.length && stack[0] === '0') {
        stack.shift();
    }
    
    return stack.length ? stack.join('') : '0';
};