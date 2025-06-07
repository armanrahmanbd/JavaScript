// JavaScript Array reduce() Method Example

const nums = [17540, 2000754, 874533, 974, 589, 60, 7077, 8985, 900007, 108644];
console.log(`Original Array: ${nums}`);

// Using reduce() to calculate the sum of all numbers in the array
let sum = nums.reduce((res, curr) => {
  return res + curr;
});
console.log(`Sum of all numbers: ${sum} using reduce() Method`);

// find out the largest number in the array by using reduce() method
let largest = nums.reduce((res, curr) => {
  return res > curr ? res : curr;
});
console.log(`Largest number in the array: ${largest} using reduce() Method`);
