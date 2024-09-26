const repeatString = function(str, num) {
if (num < 0) {
    return 'ERROR';
    // return num;
    } else {
    return str.repeat(num);
    }
};
console.log(repeatString("hey", 3));
// Do not edit below this line
module.exports = repeatString;
