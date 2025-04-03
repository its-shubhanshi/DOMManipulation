"use strict";

let istatus = document.querySelector("h5");
let Btn = document.querySelector("#add");
let check = 0;

Btn.addEventListener("click", () => {
  if (check == 0) {
    istatus.innerHTML = "Friends";
    istatus.style.color = "green";
    Btn.innerHTML = "Remove Friend";
    Btn.classList.remove("addBtn");
    check = 1;
  } else {
    istatus.innerHTML = "Stranger";
    istatus.style.color = "red";
    Btn.innerHTML = "Add Friend";
    Btn.classList.add("addBtn");
    check = 0;
  }
});
