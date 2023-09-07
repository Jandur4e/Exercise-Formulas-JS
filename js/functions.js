// All functions whould have return statement and return something
// All functions must use parametars if you see arguments being passed by
// All functions must use the same name as provided
// Edit this file to finish the function, don't make your custom file where you solve it differently
// Provide a few tests cases for your functions with console logging, (for the first one I will be providing some examples, later on you need to provide them)
// All expected output should be the same, not a variation of it
// Privde back a text file [homeowork2-name-surname.txt] and only one file
// If you chose to apply the functions in any other way (with html/css), that's for you and it won't count as homework, you must send me one .txt file
// Don't use syntax that we haven't learned yet, these are meant and possible to solve with what we have learned so far
// Ако има нејасно заради англискиот околу правилата, прашате во групен чат за разјаснување

/*
1. Write a function that calculates the square of the inputed number

*/
function findSquare(a) {
  var a = document.getElementById('inputnumber').value;
  var result = a * a;
  document.getElementById('totex1').innerHTML = `inputed number is ` + a + ' and result is: ' + result;
};


console.log(findSquare(2)); //4
console.log(findSquare(9)); //81
console.log(findSquare(15)); //225

/*
2. Write a function that calculates the area of the rectangle of inputed number

*/

function rectangleArea(a, b) {
  var a = document.getElementById('inputnumber1').value;
  var b = document.getElementById('inputnumber2').value;
  let result = a * b;
  document.getElementById('totex2').innerHTML = 'The area of rectangle is ' + result;
}
console.log(rectangleArea(10, 20)); //The area of rectangle is 200
console.log(rectangleArea(30, 30)); //The area of rectangle is 900

/*
3. Write a function to find the area and perimeter of a circle

*/
function circleValues(a) {
  var a = document.getElementById('inputnumber3').value;
  let perimeter = a * 3.1415 * 2;
  let area = a * a * 3.1415;
  document.getElementById('totex3').innerHTML = 'Perimeter: ' + perimeter.toFixed(2) + ', Area: ' + area.toFixed(2);
}
console.log(circleValues(10)); //"Perimeter: 62.83, Area: 314.15"
console.log(circleValues(15)); //"Perimeter: 94.24, Area: 706.85"
console.log(circleValues(25)); //"Perimeter: 157.07, Area: 1963.49"

/*
3. Write a function that will tell us how many character exist in a given string
Tip: You can access .length property on any given string to get the number of characters

*/
function charCount(string) {
  var string = document.getElementById('inputText').value;
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string) {
      count++;
    }
  }
  document.getElementById('totex4').innerHTML = count;
}
console.log(charCount("dog")); // 3
console.log(charCount("dinosaur")); // 8
console.log(charCount("")); // 0

/*
4. Write a function that will check if a number is even

*/
function isEven(x) {
  var x = document.getElementById('inputnumber4').value;
  if (x % 2 === 0) {
    document.getElementById('totex5').innerHTML = true;
  }
  else {
    document.getElementById('totex5').innerHTML = false;
  }
}
console.log(isEven(2)); // true
console.log(isEven(4)); // true
console.log(isEven(5)); // false
console.log(isEven(-1)); // false


/*
4. Write a function that will calculate the dog age in dog years

*/
function calculateDogAge(x) {
  var x = document.getElementById('inputnumber5').value;
  let result = x * 7;
  document.getElementById('totex6').innerHTML = 'Your doggie is ' + result.toFixed(1) + ' years old in dog years!';
}
console.log(calculateDogAge(1)); // "Your doggie is 7 years old in dog years!"
console.log(calculateDogAge(0.5)); // "Your doggie is 3.5 years old in dog years!"
console.log(calculateDogAge(12)); // "Your doggie is 84 years old in dog years!"

/*
4. Write a function that will calculate an animal age in their years by
taking human years and a conversion rate as a multiplier value, and animal name

*/
function calculateAniamalAge(animal, x, y) {
  ;
  var animal = document.getElementById('inputText1').value;
  if (animal === "cat") {
    var x = document.getElementById('inputnumber6').value;
    var y = 0.66;
    var result = x * y;
    document.getElementById('totex7').innerHTML = 'Your cat is ' + Math.floor(result) + ' years old in cat years';
  }
  else if (animal === "bird") {
    var x = document.getElementById('inputnumber6').value;
    var y = 6.8
    var result = x * y;
    document.getElementById('totex7').innerHTML = 'Your bird is ' + Math.floor(result) + ' years old in bird years';
  }
  else if (animal === "aligator") {
    var x = document.getElementById('inputnumber6').value;
    var y = 2;
    var result = x * y;
    document.getElementById('totex7').innerHTML = 'Your aligator is ' + Math.floor(result) + ' years old in aligator years';
  }
  else if (animal === "bear") {
    var x = document.getElementById('inputnumber6').value;
    var y = 2;
    var result = x * y;
    document.getElementById('totex7').innerHTML = 'Your bear is ' + Math.floor(result) + ' years old in bear years';
  }
  else {
    document.getElementById('totex7').innerHTML = 'There is no that kind of animal.';
  }
};

console.log(calculateAniamalAge("cat", 5, 0.66)); // "Your cat is 3 years old in cat years!"
console.log(calculateAniamalAge("bird", 36, 6.8)); // "Your bird is 224 years old in bird years!"
console.log(calculateAniamalAge("aligator", 15, 2)); // "Your aligator is 30 years old in aligator years!"

/*
5. Write a function that will calculate how much money you need for the rest of your life
by inputing your current age and how much money you spend per day, and assuming that people will live
100years on average

*/

function calculateSupply(age, money) {
  var age = document.getElementById('inputnumber7').value;
  var money = document.getElementById('inputnumber8').value;
  let maxAge = 100;
  let total = money * 365 * (maxAge - age);
  document.getElementById('totex8').innerHTML = 'You will need ' + total + ' euros to last you until the rest of your life.';
}

// 28 is current yeras, 36euros spending per day
console.log(calculateSupply(28, 36)); // You will need 946080 euros to last you until the rest of your life

/*
6. Write a function called squareNumber that will take one argument (a number), square that number, and return the result. 
It should also log a string like "The result of squaring the number 3 is 9."

*/
function squareNumber(x) {
  var x = document.getElementById('inputnumber9').value;
  let result = x * x
  document.getElementById('totex9').innerHTML = 'The result of squaring the number ' + x + ' is ' + result;
}
console.log(squareNumber(9));

/*
7. Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. 
It should also log a string like "Half of 5 is 2.5.".

*/
function halfNumber(x) {
  var x = document.getElementById('inputnumber10').value;
  let result = x / 2;
  document.getElementById('totex10').innerHTML = 'Half of ' + x + ' is ' + result;
}
console.log(halfNumber(5)); // "Half of 5 is 2.5.".

/*
8.  Write a function called percentOf that will take two numbers, figure out what percent the first number represents 
of the second number, and return the result. It should also log a string like "2 is 50% of 4."

Bonus: Round the result so there are only two digits after the decimal.

*/
function percentOf(x, y) {
  var x = document.getElementById('inputnumber11').value;
  var y = document.getElementById('inputnumber12').value;
  let result = x / y * 100;
  document.getElementById('totex11').innerHTML = x + ' is ' + result + '% of ' + y;
}
console.log(percentOf(2, 4)); //"2 is 50% of 4."

/*
9. Write a function that will take one argument (a number) and perform the following operations, using the functions 
you wrote earlier:

1. Take half of the number and store the result.
2. Square the result of #1 and store that result.
3. Calculate the area of a circle with the result of #2 as the radius.
4. Calculate what percentage that area is of the squared result (#3).
4. Log the last calculation.

*/
function complexMath(a) {
  var a = document.getElementById('inputnumber13').value;
  let b = a / 2
  let c = b * b;
  let x = c * c * 3.1415;
  let y = c / x * 100;
  document.getElementById('totex12').innerHTML = y.toFixed(2);
}

console.log(complexMath(5)); // 5.09
console.log(complexMath(10)); // 1.27

/*
10. Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', 
except it will add '(pinky)' at the end if the amount is greater than 1 million. 

*/
function DrEvil(amount) {
  var amount = document.getElementById('inputnumber14').value;
  if (amount < 1000000) {
    document.getElementById('totex13').innerHTML = amount + ' dollars';
  }
  else {
    document.getElementById('totex13').innerHTML = amount + ' dollars (pinky)'
  }
}
console.log(DrEvil(10)); // 10 dollars
console.log(DrEvil(1000000)); // 1000000 dollars (pinky)

/*
11. Write a function named greaterNum that takes 2 arguments, both numbers. returns whichever number is the greater (higher) number.

*/
function greaterNum(num, num1) {
  var num = document.getElementById('inputnumber15').value;
  var num1 = document.getElementById('inputnumber16').value;
  if (Math.floor(num) > Math.floor(num1)) {
    document.getElementById('totex14').innerHTML = num;
  }
  else {
    document.getElementById('totex14').innerHTML = num1;
  }
}
console.log(greaterNum(5, 10)); // 10

/*
12.  Write a function named helloWorld that takes 1 argument, and language codes like ("es", "de", "en", "fr") and returns
the stirng "Hello, World" in that language. 

*/
function helloWorld() {
  let language = document.getElementById("inputText2").value;
  if (language === "en") {
    document.getElementById('totex15').innerHTML = 'Hello, World';
  }
  else if (language === "fr") {
    document.getElementById('totex15').innerHTML = 'Bonjour tout le monde';
  }
  else if (language === "es") {
    document.getElementById('totex15').innerHTML = 'Hola Mundo';
  }
  else if (language === "de") {
    document.getElementById('totex15').innerHTML = 'Hallo Welt';
  }
  else if (language === "mk") {
    document.getElementById('totex15').innerHTML = 'Здраво свету';
  }
  else if (language === "sr") {
    document.getElementById('totex15').innerHTML = 'Zdravo svete';
  }
  else {
    document.getElementById('totex15').innerHTML = 'There is not that language';
  }
}

console.log(helloWorld("en")); // "Hello, World"
console.log(helloWorld("fr")); // 'Bonjour tout le monde';
console.log(helloWorld("es"));
console.log(helloWorld("mk"));
console.log(helloWorld("sr"));

/*
13. Write a function that tells us what the grade is based on the score. 

Possible grades are  "A", "B", "C", "D", or "F", corresponding to having solved correctly above 90%, 80%, 70%, 60%, 50% of the test

*/
function assignGrade() {
  let grade = document.getElementById("inputNumber17").value;
  if (grade >= 90) {
    document.getElementById('totex16').innerHTML = 'A';
  }
  else if (grade >= 80) {
    document.getElementById('totex16').innerHTML = 'B';
  }
  else if (grade >= 70) {
    document.getElementById('totex16').innerHTML = 'C';
  }
  else if (grade >= 60) {
    document.getElementById('totex16').innerHTML = 'D';
  }
  else {
    document.getElementById('totex16').innerHTML = 'F';
  }
}
console.log(assignGrade(95)); // A
console.log(assignGrade(65)); // D

/*


14. Write a function named pluralize that takes 2 arguments, a noun and a number and returns the number and pluralized form, 
like "5 cats" or "1 dog".

Bonus: Make it handle a few collective nouns like "sheep" and "geese". Where the plural and singular are the same


function pluralize(noun, number){;
if (number === 0){
  return `'t ` + noun;
}
else if(number === 1){
  return noun;
  }
else if (noun === "sheep" || "geese"){
  return noun;
}
  else {
    return noun+'s';
  }
}
console.log("I have " + pluralize("cat", 0));
console.log("I have " + pluralize("cat", 1));
console.log("I have " + pluralize("cat", 2));
console.log("I have " + pluralize("sheep", 2));
console.log("I have " + pluralize("geese", 2));



15.  Write a function that will convert minutes into seconds


function convertMinutes(){
  let minute = document.getElementById
  let seconds = minute * 60;
   seconds;
}
console.log(convertMinutes(5)); // 300
console.log(convertMinutes(3)); //  180
console.log(convertMinutes(2)); // 120


16.  Write a function that will convert seconds into hours, minutes and seconds


function toHoursAndMinutes(seconds){
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let remainingSeconds = seconds % 60;
  return " h: " + hours + " m: " + minutes + " s: " + remainingSeconds;
}
console.log(toHoursAndMinutes(60)); //  h: 0, m: 1, s: 0 
console.log(toHoursAndMinutes(1000)); //  h: 0, m: 16, s: 40 
console.log(toHoursAndMinutes(4250)); //  h: 1, m: 10, s: 50 

*/