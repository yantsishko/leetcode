/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const pathArray = path.split('/');
    const stack = [];

    for (let i = 0; i < pathArray.length; i++) {
        if (pathArray[i] !== '' && pathArray[i] !== '..' && pathArray[i] !== '.')         {
           stack.push(pathArray[i]); 
        }
        if (pathArray[i] === '..') {
            stack.pop();
        }
    }

    return '/' + stack.join('/');
};