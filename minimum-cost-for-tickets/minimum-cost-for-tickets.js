/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    const daysLenght = days.length;
    const dp = new Array(daysLenght + 1).fill(Number.MAX_INTEGER);
    dp[daysLenght] = 0;

    for (let i = daysLenght - 1; i >=0; i--) {
        let day7 = i;
        let day30 = i;

        while (day7 < daysLenght && days[day7] < days[i] + 7) {
            day7++;
        }
        while (day30 < daysLenght && days[day30] < days[i] + 30) {
            day30++;
        }

        dp[i] = Math.min(dp[i + 1] + costs[0], dp[day7] + costs[1], dp[day30] + costs[2]);
    }

    return dp[0];
};