const sumAll = function(firstNum, lastNum) {

let sumOfNumbers = 0;

if (firstNum < 0 || lastNum < 0) {
    return 'ERROR'
}

if (!Number.isInteger(firstNum) || !Number.isInteger(lastNum)) {
    return 'ERROR';
}

// if (!isNaN(firstNum) || !isNaN(lastNum)) {
//     return 'ERROR';
// }

if (firstNum > lastNum) {
    [firstNum, lastNum] = [lastNum, firstNum];
}

for (let i = firstNum; i <= lastNum; i++) {
    sumOfNumbers +=i;
}

return sumOfNumbers;   

};
console.log(sumAll(0, 4));

// Do not edit below this line
module.exports = sumAll;
