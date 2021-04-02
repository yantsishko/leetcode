/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    const numarray = '123456789';
    
    const lowL = low.toString().length;
    const highL = high.toString().length;
    
    const res = [];
    
    for (let i = lowL; i <= highL; i += 1) {
        
        let ind = 0;

        while (ind + i <= numarray.length) {
            const sub = +numarray.substr(ind, i);

            if (sub >= low && sub <= high) {
                res.push(sub);
            }

            ind += 1;
        }
    }
    
    return res;
};