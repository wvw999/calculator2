// Business (or back-end) logic:

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

// User interface (or front-end) logic:

$(document).ready(function(){
  $("button#add").click(function(event){
    event.preventDefault();
    var number1 = parseInt($("#number1").val());
    var number2 = parseInt($("#number2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });

  $("button#subtract").click(function(event){
    event.preventDefault();
    var number1 = parseInt($("#number1").val());
    var number2 = parseInt($("#number2").val());
    var result = subtract(number1, number2);
    $("#output").text(result);
  });

  $("button#multiply").click(function(event){
    event.preventDefault();
    var number1 = parseInt($("#number1").val());
    var number2 = parseInt($("#number2").val());
    var result = multiply(number1, number2);
    $("#output").text(result);
  });

  $("button#divide").click(function(event){
    event.preventDefault();
    var number1 = parseInt($("#number1").val());
    var number2 = parseInt($("#number2").val());
    var result = divide(number1, number2);
    $("#output").text(result);
  });
});



//BMI Calculator
// var divide = function(weight, height) {
//   return weight / height;
// };
//
// var weight = parseInt(prompt("Enter your weight (in pounds):"));
// var height = parseInt(prompt("Enter your height (in inches):"));
// var height = height * height;
//
// var result = divide(weight, height)*703.0704;
// alert(result);

//Temperature Conversion - Celsius and Fahrenheit

//
// var tempF = function(celsius) {
//     return celsius;
// }
//
// var celsius = parseInt(prompt("What is the temperature in celsius?"));
// var result = "The temperature in Fahrenheit would be " + (((9/5)*celsius) + 32);
//
// alert(result);
//
//


// Cups to Gallons

// var gallons = function(cups) {
//   return cups;
// };
//
// var cups = parseInt(prompt("How many cups do you have?"));
//
// var result = ("You have a total of " + cups/16 + " gallons.");
// alert(result);
