/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
// T = O(N)
// S = O(N) [[1], [2], [1]]
var depthSum = function(nestedList, level = 1) {
    let result = 0;

    for (let i = 0; i < nestedList.length; i++) {
        if (nestedList[i].isInteger()) {
            result += nestedList[i].getInteger() * level;
        } else {
            result += depthSum(nestedList[i].getList(), level + 1);
        }
    }
    
    return result;
};





















// var depthSum = function(nestedList, level = 1) {
//     let result = 0;
    
//     const dfs = (list, level = 1) => {
//         for (let i = 0; i < list.length; i++) {
//             if (list[i].isInteger()) {
//                 result = result + list[i].getInteger() * level;
//             }
//             const listElement = list[i].getList();
//             if (listElement.length) {
//                dfs(listElement, level + 1); 
//             }
//         }
//     }
    
//     dfs(nestedList, 1);
    
//     return result;
// };