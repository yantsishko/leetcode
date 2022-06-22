/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
const carFleet = function(target, position, speed) {
    if (!position.length || !speed.length) {
        return 0;
    }
    const cars = {};
    const carsSpeedPosition = {};
    position.forEach((pos, index) => {
        carsSpeedPosition[pos] = speed[index];
        cars[pos] = (target - pos) / carsSpeedPosition[pos];
    });
    position.sort((a, b) => b - a);

    let fleets = 1;

    let maxTime = (target - position[0]) / carsSpeedPosition[position[0]];

    for (let i = 1; i < position.length; i++) {
        const timeToTarget = cars[position[i]];
        if (maxTime < timeToTarget) {
            fleets++;
            maxTime = timeToTarget;
        }
    }

    return fleets;
};