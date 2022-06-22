/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    const n = grid[0].length;

    let arrGrid = grid.toString().split(',');
    const elementsCount = arrGrid.length;
    let resultArr = [];
    const shifts = k > elementsCount ? k % elementsCount : k;

    for(let i = 0; i < shifts; i++) {
        const item = arrGrid[arrGrid.length - (1 + i)];
        if (item) {
            resultArr.unshift(arrGrid[arrGrid.length - (1 + i)]);
        }
    }

    arrGrid.length = arrGrid.length - resultArr.length;
    
    resultArr = [...resultArr, ...arrGrid];

    let level = -1;
   
    const result = resultArr.reduce((acc, item, index) => {
        const isNext = index % n;
        if (isNext === 0) {
            level++;
        }

        if (!acc[level]) {
            acc[level] = [];
        }

        acc[level].push(item);
        
        return acc;
    }, [])

    return result;
};