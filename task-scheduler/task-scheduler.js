/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  let taskList = {};
  let ltAmt = 0;
  let ltSeqs = 0;
  tasks.forEach((v) => {
    if(!taskList[v]) {
      taskList[v] = 1;
    } else {
      taskList[v]++;
    }
    if(taskList[v] === ltAmt) {
      ltSeqs++;
    }
    if(taskList[v]>ltAmt) {
      ltAmt = taskList[v];
      ltSeqs = 1;
    }
  });
  let threads = n+1;
  if(ltSeqs>=threads) {
    return tasks.length;
  }
 
  let longestSeq = (ltAmt - 1) * threads + ltSeqs;
 
  let holes = (ltAmt - 1) * (n - ltSeqs + 1);
  let steps = longestSeq;
  Object.keys(taskList).forEach((val) => {
    const taskAmt = taskList[val];
    if(taskAmt<ltAmt) {
      holes -= taskAmt;
    }
  });
  if(holes < 0) {
    steps -= holes;
  }
  return steps;
};