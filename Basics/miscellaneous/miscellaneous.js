// JavaScript Miscellaneous
let str='My Name Is MD Arman RAHMAN';
console.log(`Your String is "${str}"`);

// string uppercase
console.log(`The uppercase version of your given string is "${str.toUpperCase()}" by using toUpperCase() method`);

// string lowercase
console.log(`The lowercase version of your given string is "${str.toLowerCase()}" by using toLowerCase() method`);

// string slice
console.log(`The sliced version of your given string is "${str.slice(11, 26)}" by using slice() method`); // ${str.slice(11)} would also work

// string join by concatination
let str1 = "Hello, ";
console.log(`Your String1 is "${str1}"`);
console.log(`The concatinated version of string1 and your given string is "${str1.concat(str)}" by using concat() method`); // Output: Hello, My Name Is MD Arman RAHMAN

// string char replace
console.log(`The char replaced version of your given string is "${str1.replace('lo, ', 'p')}" by using replace() method`); // Output: Hello => Help

// string split
console.log(`The split version of your given string is "${str.split('Arman')}" by using split() method`);

// access string char
// console.log(`The char at index 0 of your given string is "${str[0]}" by using index notation`); // Output: M

// alternative by calling charAt() method
console.log(`The char at index 14 of your given string is "${str.charAt(14)}" by using charAt() method`); // Output: A