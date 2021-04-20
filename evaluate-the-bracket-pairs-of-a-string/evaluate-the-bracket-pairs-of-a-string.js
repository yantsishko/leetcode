/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 * T = O(N + M)
 * S = O(M)
 */
var evaluate = function(s, knowledge) {
    // knowledge to hash table
    const hash = {};
    
    for (let i = 0; i < knowledge.length; i++) {
        hash[knowledge[i][0]] = knowledge[i][1];
    }
    
    
    // search all keys
    let result = '';
    let isKey = false;
    let key = '';
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '(' && s[i] !== ')') {
            if (isKey) {
                key += s[i];
            } else {
                 result += s[i];
            }
        }
        
        if (s[i] === '(') {
            isKey = true;
        }
        
        if (s[i] === ')') {
            isKey = false;
            result += hash[key] || '?';
            key = '';
        }
    }
    
    return result;
};
    
    // s = "(a)(a)(a)aaa", knowledge = [["a","hello"]]
    // hello(a)(a)aaa