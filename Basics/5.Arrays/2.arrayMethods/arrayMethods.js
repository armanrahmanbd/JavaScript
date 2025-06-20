// JavaScript String Methods

let fruits = ["apple", "banana", "cherry"];
console.log(fruits);

// toString() method to turn array into a string
console.log(fruits.toString()); // Output: apple,banana,cherry

// push() method to add an element to the end of an array
fruits.push("dates");
console.log(`After adding 'dates' to the array by using push() method`);
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'dates']

// pop() method to remove the last element from an array
fruits.pop();
console.log(`After removing the last element by using pop() method`);
console.log(fruits); // Output: ['grapes', 'apple', 'banana', 'cherry']

// unshift() method to add an element to the beginning of an array
fruits.unshift("grapes");
console.log(`After adding 'grapes' to the array by using unshift() method`);
console.log(fruits); // Output: ['grapes', 'apple', 'banana', 'cherry', 'dates']

// shift() method to remove the first element from an array
fruits.shift();
console.log(`After removing the first element by using shift() method`);
console.log(fruits); // Output: ['apple', 'banana', 'cherry']

// slice() method to extract a part of an array
let slicedArray = fruits.slice(1, 3);
console.log(`After extracting a part of the array by using slice() method`);
console.log(slicedArray); // Output: ['banana', 'cherry']

// splice() method to add elements from an array
fruits.splice(1, 0, "mango");
console.log(`After adding 'mango' to the array by using splice() method`);
console.log(fruits); // Output: ['apple', 'mango', 'banana', 'cherry']

// splice() method to replace an element in an array
fruits.splice(1, 2, "watermelon", "papaya");
console.log(`After replacing elements in the array by using splice() method`);
console.log(fruits); // Output: ['apple', 'watermelon', 'papaya', 'cherry']

// splice() method to remove elements from an array
fruits.splice(1, 1);
console.log(`After removing the element at index 1 by using splice() method`);
console.log(fruits); // Output: ['apple', 'banana', 'cherry']

// concat() method to join multiple arrays together
let fruits2 = ["kiwi", "lemon", "orange"];
let fruits3 = ["pineapple", "lici"];
console.log(fruits2, fruits3);
console.log(`After joining two arrays by using concat() method`);
console.log(fruits.concat(fruits2, fruits3)); // Output: ['apple', 'banana ', 'cherry', 'kiwi', 'lemon', 'orange', 'pineapple', 'lici']
