/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    if (A.length !== B.length) return false;
    const setA = new Set();
    const setB = new Set();

    let pos1 = null;
    let pos2 = null;
    let repeatA = false;
    let repeatB = false;
    let incorrctPositionsCount = 0;
    for (let i = 0; i < A.length; i++) {
        if (setA.has(A[i])) {
            repeatA = true;
        }
        if (setB.has(B[i])) {
            repeatB = true;
        }

        if (A[i] !== B[i]) {
            incorrctPositionsCount++;
            if (pos1 === null) {
                pos1 = i;
            } else if (pos2 === null) {

                pos2 = i;
            }
        }
        
        setA.add(A[i]);
        setB.add(B[i]);
    }
    
    if (A === B && repeatA && repeatB) {
        return true;
    }
    
    if (incorrctPositionsCount === 2) {
        if (A[pos1] === B[pos2] && A[pos2] === B[pos1]) {
            return true
        }
    }
    
    return false;
}; 