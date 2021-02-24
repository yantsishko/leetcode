/**
 * @param {string} s
 * @return {string}
 */
// S: O(26) = O(1)
// T: O(N * 26) = O (N)
var removeDuplicateLetters = function(s) {
    if (s.length < 2) return s;
    const stack = [];
    const set = new Set();
    const map = {};
    
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = map[s[i]] ? map[s[i]] + 1 : 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (!set.has(s[i])) {
            while (stack.length > 0) {
                const top = stack[stack.length - 1];
                if (top < s[i] || map[top] === 0) {
                    break;
                }
                stack.pop();
                set.delete(top);
            }
            stack.push(s[i]);
            set.add(s[i]);
        }
        map[s[i]] = map[s[i]] - 1;
    }
    
    return stack.join('');
};