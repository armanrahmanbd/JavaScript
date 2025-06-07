// JavaScript Array map() Method Example
const Nums = [11, 22, 33, 44, 55, 66, 77, 88, 99];
console.log(`Original Array: ${Nums}`);

// Using map() to create a new array with each element multiplied by 2
let mulNums = Nums.map((num) => {
  return num * 2;
});
// Displaying the original and new arrays
console.log(`New Array: ${mulNums}`);
