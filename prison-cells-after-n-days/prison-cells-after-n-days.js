/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, N) {
//     let currentState = [...cells];
//     const nextState = [...cells];
    
//     for (let i = 0; i < N; i += 1) {
//         for (let j = 0; j < cells.length; j += 1) {
//             if (j !== 0 && j !== cells.length - 1) {   
//                 if (currentState[j - 1] === currentState[j + 1]) {
//                     nextState[j] = 1;
//                 }
                
//                 if (currentState[j - 1] !== currentState[j + 1]) {
//                     nextState[j] = 0;
//                 }
//             }
//             if (j === 0 && currentState[j]) {
//                 nextState[j] = 0;
//             }
//             if (j === cells.length - 1 && currentState[j]) {
//                 nextState[j] = 0;
//             }
//         } 
        
//         currentState = [...nextState];
//     }
    
//     return currentState;
    
    let cycle = 1;
    let fisrtState = new Array(cells.length);
    
    for (let i = 1; i < cells.length - 1; i += 1) {
        fisrtState[i] = cells[i - 1] === cells[i + 1] ? 1 : 0;
    }
    
    N = N - 1;
    
    for(let i = 0; i < cells.length; i += 1) {
        cells[i] = fisrtState[i] === undefined ? 0 : fisrtState[i];
    }

    while (N-- > 0) {
 
        let temp = new Array(cells.length);
        
        for(let i = 1; i < cells.length - 1; i += 1) {
            temp[i] = cells[i - 1] === cells[i + 1] ? 1 :0;
        }
        
        if(JSON.stringify(temp) === JSON.stringify(fisrtState)) {
             N %= cycle
        };
     
        for(let i = 0; i < cells.length; i += 1) {
            cells[i] = temp[i] === undefined ? 0 : temp[i]; 
        }

        cycle += 1;
    }
    
    return cells;

};