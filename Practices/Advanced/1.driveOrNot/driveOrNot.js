console.log("Let's check if you can drive or not!");

let userAge;

while (true) {
  userAge = prompt("Please enter your age:");

  // Convert to number
  userAge = Number(userAge);

  // Check if it's a valid number and positive
  if (!isNaN(userAge) && userAge > 0) {
    break; // Valid input, exit loop
  }

  console.log("Invalid input. Please enter a valid age.");
}

console.log(`Your age is ${userAge} years.`);

if (userAge >= 70) {
  console.log("Find someone to drive you.");
} else if (userAge >= 18) {
  console.log("You can drive.");
} else {
  console.log("You cannot drive.");
}
