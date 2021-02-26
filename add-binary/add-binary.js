/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let p1 = a.length - 1;
    let p2 = b.length - 1;
    let sum = '';
    let additional = 0;

    while (p1 >= 0 || p2 >= 0) {
        let value1 = +a[p1] || 0;
        let value2 = +b[p2] || 0;

        if ((value1 + value2) + additional >= 2) {
            sum = ((value1 + value2) + additional) % 2 + sum
            additional = 1;
        } else {
            sum = ((value1 + value2) + additional) + sum;
            additional = 0;
        }
        
        p1--;
        p2--;
    }
    
    return additional ? 1 + sum : sum;
};