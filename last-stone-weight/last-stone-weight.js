/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    if (stones.length === 0) return 0;
    if (stones.length === 1) return stones[0];
    let sortStones = stones;

    while (sortStones.length !== 1 && sortStones.length !== 0) {
        sortStones = sortStones.sort((a, b) => a - b);

        const maxLast = sortStones[sortStones.length - 1];
        const maxPrevLast = sortStones[sortStones.length - 2];
        
        if (maxLast === maxPrevLast) {
            sortStones.length = sortStones.length - 2;
        }
        
        if (maxLast !== maxPrevLast) {
            const diff = maxLast - maxPrevLast;
            sortStones.length = sortStones.length - 1;
            sortStones[sortStones.length - 1] = maxLast - maxPrevLast;
        }
    }

    return sortStones;
};