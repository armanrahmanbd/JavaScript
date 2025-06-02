// Create an object
const studentResult = {
  studentName : 'Mark Rober',
  studentRoll: 101,
  Grade: 'A+',
  totalMark : 240,
  percentage : 80.0,
  math: 80,
  science: 70,
  english: 90, 
};
// assining different value outside the object
studentName = 'Arman'; // won't work
studentResult ['studentName'] = 'Arman Rahman'; // working 
// Accessing the object properties
console.log(studentResult);
console.log(studentName);
console.log(studentResult.studentName); //standard of accessing object property
console.log(studentResult ['studentName']); // alternative way of accessing object property
