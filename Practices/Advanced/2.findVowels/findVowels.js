// Find String Vowels using Functions (Advanced Way)

// function findVowels(str) {
//   let vowels = "aeiouAEIOU";
//   let count = 0;
//   for (let vow of vowels) {
//     count += str.split(vow).length - 1;
//   }
//   return count;
// }

// // Test the function
// console.log(findVowels("Hello World")); // Output: 3

// Explanation:
// The function findVowels takes a string as input and counts the number of vowels in it.
// Find String Vowels using Functions (Advanced Way)

function findVowels(str) {
  let vowels = "aeiouAEIOU";
  let found = [];
  for (let char of str) {
    if (vowels.includes(char)) {
      found.push(char);
    }
  }
  return {
    count: found.length,
    vowels: found,
  }; 
}


// Test the function
const result = findVowels("Hello World");
console.log(`Count: ${result.count}`); // Output: 3
console.log(`Vowels: ${result.vowels.join(", ")}`); // Output: e, o, o
