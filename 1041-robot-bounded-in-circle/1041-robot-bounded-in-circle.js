/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    let dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let x = 0;
    let y = 0;
    
    let k = 0;
    for(let i = 0; i < instructions.length; i += 1){
         if(instructions[i] == 'G'){
            x += dir[k][0];
            y += dir[k][1];
         }else if(instructions[i] == 'L'){
            k = (k + 1) % 4;
         }else{
            k = ((k - 1) + 4) % 4;
         }
      }
      return x == 0 && y == 0 || k > 0;
};