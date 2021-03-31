/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    const jToArray = Array.from(J);
    const sToArray = Array.from(S);
    let counter = 0;

    for (let i = 0; i < sToArray.length; i++) {
        if (jToArray.includes(sToArray[i])) {
            counter++;
        }
    }
        
    return counter;
};