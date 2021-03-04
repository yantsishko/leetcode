/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let slow = n;
    let fast = powSum(n);
    while(fast != 1 && slow != fast){
        slow = powSum(slow);
        fast = powSum(powSum(fast));
    }
    return fast == 1;
};

const powSum = (num) => {
    const arrayNum = Array.from(num.toString());
    let sum = 0;

    for (let i = 0; i < arrayNum.length; i++) {
        sum += Math.pow(+arrayNum[i], 2);
    }

    return sum;
}