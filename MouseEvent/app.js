"use strict";

let elem = document.querySelectorAll(".elem");

for (let value of elem) {
  value.addEventListener("mouseenter", (event) => {
    value.childNodes[3].style.opacity = 1;
  });

  value.addEventListener("mouseleave", (event) => {
    value.childNodes[3].style.opacity = 0;
  });

  value.addEventListener("mousemove", (event) => {
    value.childNodes[3].style.left = event.x + "px";
    value.childNodes[3].style.top = event.y + "px";
  });
}
