/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    if (!employees.length) return 0;
    let hash = {};
    for (let i = 0; i < employees.length; i++) {
        hash[employees[i].id] = employees[i];
    }

    let importanceTotal = hash[id].importance;
    let queue = [...hash[id].subordinates];
    
    while (queue.length) {
        let length = queue.length;
        for (let i = 0; i < length; i++) {
            const currentEmplId = queue.shift();
            importanceTotal += hash[currentEmplId].importance;
            queue = [...queue, ...hash[currentEmplId].subordinates];
        }
    }
    
    return importanceTotal;
};