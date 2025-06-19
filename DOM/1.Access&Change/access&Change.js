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
