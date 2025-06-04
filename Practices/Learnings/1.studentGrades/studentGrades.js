// Practice -1) Student Grades by their Scores
let studentScore = prompt("Enter your Score:")
if (studentScore >= 80 && studentScore <= 100){
  console.log("Your Grade is: A");
} else if (studentScore >= 70 && studentScore <= 79){
  console.log("Your Grade is: B");
} else if (studentScore >= 60 && studentScore <= 69){
  console.log("Your Grade is: C");
} else if (studentScore >= 50 && studentScore <= 59){
  console.log("Your Grade is: D");
} else if (studentScore >= 0 && studentScore <= 49){
  console.log("Your Grade is: F");
} else {
  console.log("Invalid Score");
}