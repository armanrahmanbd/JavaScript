// For a given array with marks of students -> [85, 97, 44, 37, 76, 60] Find the average marks of the entire class.

let stuMarks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let mark of stuMarks){
  sum += mark;
};
console.log(`The average of student marks is ${sum/stuMarks.length}`);