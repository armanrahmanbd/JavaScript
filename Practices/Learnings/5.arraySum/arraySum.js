// For a given array with marks of students -> [85, 97, 44, 37, 76, 60] Find the average marks of the entire class.

let stuMarks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let mark of stuMarks){
  sum += mark;
};
console.log(`The average of student marks is ${sum/stuMarks.length}`);

// For a given array with prices of 5 items -> [250, 645, 300, 900, 50] All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

// using for loop
let itemPrices = [250, 645, 300, 900, 50];
for (let i=0; i<itemPrices.length; i++){
   let offer = itemPrices[i]/ 10
   
  console.log(oferPrice)
}
