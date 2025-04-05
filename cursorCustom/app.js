"use strict";

let main = document.querySelector("#main");
let cursor = document.querySelector(".cursor");

cursor.style.backgroundColor = "green";

function cursorCustom(event) {
  console.log(event.x);
  cursor.style.left = event.x + "px";
  cursor.style.top = event.y + "px";
}
main.addEventListener("mousemove", cursorCustom);
