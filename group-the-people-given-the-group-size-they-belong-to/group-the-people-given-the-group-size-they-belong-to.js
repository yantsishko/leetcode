/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const groups = {};
    groupSizes.forEach((group, index) => {
        if (!groups[group]) {
            groups[group] = [index];
        } else {
            groups[group].push(index);
        }
    });
    const result = Object.keys(groups).reduce((acc, key) => {
        if (groups[key].length === +key) {
            acc.push(groups[key]);
        }

        if (groups[key].length > +key) {
            const lenght = groups[key].length;
            for(let i = 0; i < lenght / +key; i++) {
                 acc.push(groups[key].splice(0, +key));     
            }
        }
        
        return acc;
    }, []);
    
    return result;
};