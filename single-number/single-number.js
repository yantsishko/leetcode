/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const Map = {};
    
    nums.forEach(num => {
        if (!Map[num]) {
            Map[num] = 0;
        }
        
        Map[num] += 1; 
    });

    for (let num in Map) {
        if (Map[num] === 1) return num;
    }
};
