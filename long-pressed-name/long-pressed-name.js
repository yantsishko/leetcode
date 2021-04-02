/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
// Time O(N + T)
// Memory: O(1)
var isLongPressedName = function(name, typed) {
    let np = 0;
    let tp = 0;
    
    while (np < name.length && tp < typed.length) {
        if (name[np] === typed[tp]) {
            np += 1;
            tp += 1;
        } else if (tp >= 1 && typed[tp] === typed[tp - 1]) {
            tp += 1;
        } else {
            return false;
        }
    }

    if (np !== name.length) {
        return false;
    } else {
        while (tp < typed.length) {
            if (typed[tp] !== typed[tp - 1]) {
                return false;
            }
            
            tp += 1;
        }
    }
    
    return true;
};