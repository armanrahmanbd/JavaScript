// JavaScript Array filter() Method Example
const Nums = [11, 22, 33, 44, 55, 66, 77, 88, 99];
console.log(`Original Array: ${Nums}`);

// Using filter() to create a new array where all numbers are even
let evenNums = Nums.filter((num) => {
  return num % 2 === 0;
});
console.log(`New Even Numbers Array: ${evenNums}`);
// Using filter() to create a new array where all numbers are greater than 50
let greaterThan50 = Nums.filter((num) => {
  return num > 50;
});
console.log(`New Numbers Greater Than 50 Array: ${greaterThan50}`);
