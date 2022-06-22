/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function(s, shift) {
    let shifts = 0;
    shift.forEach(item => {
        if (item[0] === 0) {
            shifts -= item[1];
        } else {
            shifts += item[1];
        }
    });
    if (shifts === 0) return s;
    let result = s.split('');

    if (shifts > 0) {
        for (let i = 0; i < shifts; i++) {
            const lastElement =  result[result.length - 1];
            result.pop();
            result.unshift(lastElement);
            
        }
    } else {
        for (let i = 0; i < (shifts * -1); i++) {
            const firstElement = result[0];
            result.splice(0 ,1);
            result.push(firstElement);
        }
    }
    
    return result.join('');
    
};