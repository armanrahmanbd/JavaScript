// Find String Vowels using Functions (Advanced Way)

function findVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let vow of vowels) {
    count += str.split(vow).length - 1;
  }
  return count;
}
// Test the function
console.log(findVowels("Hello World")); // Output: 3
