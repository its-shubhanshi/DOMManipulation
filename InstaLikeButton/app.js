"use strict";

let con = document.querySelector("#container");
let like = document.querySelector("i");

con.addEventListener("dblclick", function () {
  like.style.transform = " translate(-50%, -50%) scale(1)";
  like.style.color = "red";
  like.style.opacity = 0.8;

  setTimeout(function () {
    like.style.transform = " translate(-50%, -50%) scale(0)";
  }, 1000);

  setTimeout(function () {
    like.style.transform = " translate(-50%, -50%) scale(0)";
  }, 2000);
});
