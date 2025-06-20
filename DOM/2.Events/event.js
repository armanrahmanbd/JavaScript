// This code demonstrates how to handle a button click event in JavaScript.

let jsBtn1 = document.querySelector("#btn1");
jsBtn1.onclick = (event) => {
  console.log("Button1 clicked!");
  console.log("Event type:", event.type);
  console.log("Event target:", event.target);
  console.log(event.clientX, event.clientY);
};

// mouseover event
// This code demonstrates how to handle a mouseover event on an element in JavaScript.

let jsBox1 = document.querySelector("#box1");
jsBox1.onmouseover = (event) => {
  console.log("Mouse over the Box1!");
  console.log("Event type:", event.type);
};

// Event Listener will do the same task
let jsBtn2 = document.querySelector("#btn2");
jsBtn2.addEventListener("click", (event) => {
  console.log("Button2 Clikced!");
  console.log("Event type:", event.type);
  console.log("Event target:", event.target);
});

// mouseover event listener by callback function
let jsBox2 = document.querySelector("#box2");

const onMouseOver = () => {
  console.log("Mouse over the Box2");
};
jsBox2.addEventListener("mouseover", onMouseOver);

// Multiple Event Listener
let jsBtn3 = document.querySelector("#btn3");

const eventHandler = () => {
  console.log(`Button3 clicked by Handler 1`);
};

jsBtn3.addEventListener("click", eventHandler);
jsBtn3.addEventListener("click", () => {
  console.log("Button3 clicked by handler 2");
});

// remove event listener
jsBtn3.removeEventListener("click", eventHandler);

// Change the theme using event listener
let jsThemeBtn = document.querySelector("#theme-btn");
let body = document.querySelector("body");

let currMode = "light";
const changeMode = () => {
  if (currMode === "light") {
    currMode = "dark";
    body.style.backgroundColor = "black";
    jsThemeBtn.innerHTML = "Light";
    body.style.color = "white";
  } else {
    currMode = "light";
    body.style.backgroundColor = "white";
    jsThemeBtn.innerHTML = "Dark";
    body.style.color = "black";
  }
};

jsThemeBtn.addEventListener("click", changeMode);
