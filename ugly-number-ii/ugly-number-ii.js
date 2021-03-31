/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    // bruteforce
//     if (n === 1) return 1;
//     let counter = 1;
//     let iteration = 1;
    
//     const maxDivide = (a, b) => { 
//         while(a % b == 0) 
//             a = a / b; 
//         return a; 
//     } 
    
//     const isUgly = (number) => { 
//         number = maxDivide(number, 2); 
//         number = maxDivide(number, 3); 
//         number = maxDivide(number, 5); 
          
//         return number === 1 ? 1 : 0; 
//     } 

//     while (iteration < n) {
//         counter += 1;
        
//         if (isUgly(counter)) {
//             iteration += 1;
//         }
//     } 
    
//     return counter;
    
    let next_ugly_2 = 2;
    let next_ugly_3 = 3;
    let next_ugly_5 = 5;
    let i2 = 0;
    let i3 = 0;
    let i5 = 0;
    
    let next_uglu = 1;
    
    let uglu = [1];
    
    for (let i = 1; i < n; i += 1) {
        next_uglu = Math.min(next_ugly_2, Math.min(next_ugly_3, next_ugly_5));

        uglu[i] = next_uglu;
        
        if (next_uglu === next_ugly_2) {
            i2 += 1;
            next_ugly_2 = uglu[i2] * 2;
        }
    
        if (next_uglu === next_ugly_3) {
            i3 += 1;
            next_ugly_3 = uglu[i3] * 3;
        }

        if (next_uglu === next_ugly_5) {
            i5 += 1;
            next_ugly_5 = uglu[i5] * 5;
        }
    }

    return next_uglu;
};