// JavaScript Arrays
// 1. Create an array of cities
let cities = ["New York", "Los Angeles", "Chicago", "Houston", "Philadelphia"];
// 2. Create an array of numbers
let numbers = [1, 2, 3, 4, 5];
// // 3. Create an array of objects
// let people = [{ name: "John", age: 30}, {name: "Jane", age: 25 }, {name: "Bob", age: 40} ];
// // 4. Create an array of strings
// let strings = ["Hello", "World", "This", "is", "a", "test"];
// // 5. Create an array of booleans
// let booleans = [true, false, true, false, true, false];
// // 6. Create an array of mixed data types
// let mixed = ["apple", 1, true, "banana", 2, false, "orange", 3, true];
// // 7. Create an array of arrays
// let arrays = [[1, 2, 3], [4, 5, 6 ], [7, 8, 9]];

// access the array elements by using loops
// 1. Use a for loop to access the elements of the cities array

// using for loop
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
} // workable

// using for of loop
for (let city of cities) {
  console.log(city);
} // preferable & best practice method

for (let city of cities) {
  console.log(city.toUpperCase());
}
