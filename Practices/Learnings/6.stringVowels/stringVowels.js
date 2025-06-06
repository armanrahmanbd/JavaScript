// Find String Vowels using Functions

function findVowels(str) {
  let count = 0;
  for (let char of str) {
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u" ||
      char == "A" ||
      char == "E" ||
      char == "I" ||
      char == "O" ||
      char == "U"
    ) {
      count++;
    }
  }
  return count;
}
// Test the function
console.log(findVowels("Arman Rahman")); // Output: 3
