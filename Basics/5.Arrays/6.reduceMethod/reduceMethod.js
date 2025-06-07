// JavaScript Array reduce() Method Example

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`Original Array: ${nums}`);

// Using reduce() to calculate the sum of all numbers in the array
let sum = nums.reduce((res, curr) => {
  return res + curr;
});
console.log(`Sum of all numbers: ${sum} using reduce() Method`);
