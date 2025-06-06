// user will input their names and the code will generate a username with the name with adding @ before and the name char length at the last e.g., name= Arman Rahman, the user name should be @armanrahman11

let inputName = prompt("Please enter your name");
// let removeWhiteSpaces = inputName.replace(/\s+/g, ''); // would also work

let removeWhiteSpaces = inputName.replaceAll(' ', '');
let userName = `@${removeWhiteSpaces.toLowerCase()}${removeWhiteSpaces.length}`
console.log(userName)