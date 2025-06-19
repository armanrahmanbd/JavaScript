let h1 = document.querySelector("h1");
h1.innerText = `${h1.innerText} from JavaScript`;
let p = document.querySelector("p");
p.innerText = `${p.innerText}d using JavaScript`;

let divs = document.querySelectorAll(".box");

let idx = 1;
for (let div of divs) {
  div.innerText = `Div ${idx} changed by JS`;
  idx++;
}

// divs[0].innerHTML = "First Div";
// divs[1].innerText = "Second Div";
// divs[2].innerText = "Third Div";

// DOM Manipulation
// 1) Atributes
// getAttribute(attr) // to get the value of an attribute

let para = document.querySelector(".para");
console.log(para.getAttribute("class")); // to get the value of the class attribute

// setAttribute(attr) // to set the value of an attribute
// para.setAttribute("para", "new-class");
console.log(para.setAttribute("class", "new-para")); // to get the value of the class attribute

// node.style // to get the style of an element
let jsBox = document.querySelector(".js-box");
jsBox.style.backgroundColor = "yellow"; // to set the color of the element
jsBox.style.hover = "background-color: red"; // to set the hover color of the element
jsBox.innerText = `${jsBox.innerText} modified by JS`; // to change the text of the element
jsBox.style.color = "blue"; // to set the text color of the element
jsBox.style.fontSize = "20px"; // to set the font size of the element

// Crate Element
let jsBtn = document.createElement("button"); // to create a new element
jsBtn.innerText = "Click Me"; // to set the text of the new element
jsBtn.className = "js-btn"; // to set the class of the new element
jsBtn.style.backgroundColor = "blue"; // to set the background color of the new element
jsBtn.style.color = "white"; // to set the text color of the new element
jsBtn.style.fontSize = "16px"; // to set the font size of the new element
jsBtn.style.padding = "10px"; // to set the padding of the new element
jsBtn.style.border = "none"; // to set the border of the new element
jsBtn.style.borderRadius = "5px"; // to set the border radius of the new element
jsBtn.style.cursor = "pointer"; // to set the cursor of the new element
jsBtn.style.margin = "10px"; // to set the margin of the new element
jsBtn.style.h;

// show the new element

// jsBtn.style.display = "inline-block"; // to set the display of the new element
// jsBox.appendChild(jsBtn); // to append the new element to the existing element
// jsBox.append(jsBtn); // another way to append the new element
// jsBox.prepend(jsBtn); // to prepend the new element to the existing element
//jsBox.before(jsBtn); // to insert the new element before the existing element
jsBox.after(jsBtn); // to insert the new element after the existing element
