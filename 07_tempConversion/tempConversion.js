const convertToCelsius = function(fTemp) {
let fraction = 5/9;
let roundOneDecimal = Math.round(cTemp * 10) / 10;
return (fTemp - 32) * fraction;

console.log(roundOneDecimal);

};

const convertToFahrenheit = function(cTemp) {
let fraction =  9/5;
return (cTemp * fraction) + 32; 
};



// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
