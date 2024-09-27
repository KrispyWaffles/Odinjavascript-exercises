const convertToCelsius = function(fTemp) {
let fraction = 5/9;

return Math.round((fTemp - 32) * fraction * 10) / 10;;

};

const convertToFahrenheit = function(cTemp) {
let fraction =  9/5;
return Math.round((cTemp * fraction + 32) * 10) / 10;; 

};



// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
