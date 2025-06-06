// For a given array with marks of students -> [85, 97, 44, 37, 76, 60] Find the average marks of the entire class.

let stuMarks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let mark of stuMarks){
  sum += mark;
};
console.log(`The average of student marks is ${sum/stuMarks.length}`);

// For a given array with prices of 5 items -> [250, 645, 300, 900, 50] All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

// using for loop
let itemPrices1 = [250, 645, 300, 900, 50];

for (let i=0; i<itemPrices.length; i++){
   let itemsOffer = itemPrices1[i]/ 10;
   itemPrices1[i] -= itemsOffer;
}
console.log(itemPrices1);

// using for of loop
 let itemPrices2 = [250, 645, 300, 900, 50];
let i = 0;
for (let prices of itemPrices2){
  let 
}