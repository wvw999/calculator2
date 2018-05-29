// var add = function(number1, number2) {
//   return number1 + number2;
// };
//
// var subtract = function(number1, number2) {
//   return number1 - number2;
// };
//
// var multiply = function(number1, number2) {
//   return number1 * number2;
// };
//
// var divide = function(number1, number2) {
//   return number1 / number2;
// };
//
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
//
// var result = divide(number1, number2);
// alert(result);


//BMI Calculator
var divide = function(weight, height) {
  return weight / height;
};

var weight = parseInt(prompt("Enter your weight (in pounds):"));
var height = parseInt(prompt("Enter your height (in inches):"));
var height = height * height;

var result = divide(weight, height)*703.0704;
alert(result);
