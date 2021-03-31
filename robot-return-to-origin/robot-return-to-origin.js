/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    // [x, y]
    let coord = [0, 0];
    
    for (let i = 0; i < moves.length; i++) {
        switch(moves[i]) {
            case "U":
                coord[1] += 1;
                break;
             case "D":
                coord[1] -= 1;
                break;
            case "L":
                coord[0] -= 1;
                break;
             case "R":
                coord[0] += 1;
                break;
        }
    }
    
    return coord[0] === 0 && coord[1] === 0;
};