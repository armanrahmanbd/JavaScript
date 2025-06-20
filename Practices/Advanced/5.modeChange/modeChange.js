// Change the theme using event listener
let jsThemeBtn = document.querySelector("#btn");
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
