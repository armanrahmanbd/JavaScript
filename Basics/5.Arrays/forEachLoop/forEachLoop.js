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
// Function to print the sum of all numbers in an array using forEach
let sum = 0;
numbers.forEach((number) => {
  sum += number;
});
console.log("Sum of all numbers:", sum);
