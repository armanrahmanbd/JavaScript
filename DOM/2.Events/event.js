// This code demonstrates how to handle a button click event in JavaScript.

let jsBtn = document.querySelector(".btn");
jsBtn.onclick = (event) => {
  console.log("Button clicked!");
  console.log("Event type:", event.type);
  console.log("Event target:", event.target);
  console.log(event.clientX, event.clientY);
};

// mouseover event
// This code demonstrates how to handle a mouseover event on an element in JavaScript.

let jsBox = document.querySelector(".box");
jsBox.onmouseover = (event) => {
  console.log("Mouse over the box!");
  console.log("Event type:", event.type);
};
