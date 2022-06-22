/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    const oddArray = [];
    const evenArray = [];
    
    A.forEach(element => {
        if (element % 2 === 0) {
            oddArray.push(element);
        } else {
            evenArray.push(element);
        }
    });
    
    return [...oddArray, ...evenArray]
};