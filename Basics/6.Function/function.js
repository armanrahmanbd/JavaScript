// JavaScript Function

// Function to print hello world
function printHelloWorld() {
  console.log("Hello World!");
}
printHelloWorld();

// a function that takes two parameters x and y, and returns their sum
function add(x, y) {
  return x + y;
}
console.log(add(989, 10));

// Arrow function to print hello world
const printHelloWorldArrow = () => {
  console.log("Hello World!");
};
printHelloWorldArrow();

// Function to print the multification of two numbers using arrow function
const mulNumber = (x, y) => {
  return x * y;
};
console.log(mulNumber(5, 12));

// forEach function to iterate over an array and print each element // only for arrays not strings
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
  console.log(number);
});

let cityNames = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata"];
// Function to print each city name using forEach
cityNames.forEach((city, idx, arr) => {
  console.log(city.toUpperCase(), idx, arr);
});

// Function to print the square of each number in an array using forEach
numbers.forEach((number) => {
  console.log(number * number);
});
