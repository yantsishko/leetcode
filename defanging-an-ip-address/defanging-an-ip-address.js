/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let newStr = '';
    for (let i = 0; i < address.length; i++) {
        if (address[i] === '.') {
           newStr += '[.]' ;
        } else {
            newStr += address[i];
        }
    }
    
    return newStr;
    // return address.replace(/\./g, '[.]');
};