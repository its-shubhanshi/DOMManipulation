"use strict";

let arr = [
    {
        dp: "https://images.unsplash.com/photo-1618702999466-3282e523fb90?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdpcmx8ZW58MHwyfDB8fHww",
        story:
            "https://media.istockphoto.com/id/896160952/photo/selective-focus-of-happy-6-month-indian-asian-little-kid-wearing-pink-dress-crawling-on-the.webp?a=1&b=1&s=612x612&w=0&k=20&c=cmvVer9DfgTx9KAwDsY99bv5NHZ2WflXrLfElpIBE-Q=",
    },
    {
        dp: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWx8ZW58MHwxfDB8fHww",
        story:
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        dp: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
        story:
            "https://images.unsplash.com/photo-1512375890245-7862e320210a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    },
    {
        dp: "https://images.unsplash.com/photo-1615292026763-3af006e59a67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
        story:
            "https://images.unsplash.com/photo-1654764745582-69893ee8a985?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
    },
];

let clutter = "";
arr.forEach((element, idx) => {
    console.log("dp : ", element.dp, idx);
    clutter += `<div class="story">
          <img id="${idx}"
          src="${element.dp}"
            alt="story"
          />
        </div>
  `;
});
let fullScreen = document.querySelector("#full-screen");
document.querySelector("#stories").innerHTML = clutter;
document.querySelector("#stories").addEventListener("click", (element) => {
    console.log("jh", element.target.id);
    console.log(arr[element.target.id].story);
    let storyValue = arr[element.target.id].story;
    fullScreen.style.display = "block";
    fullScreen.style.backgroundImage = `url(${storyValue})`;
    setTimeout(() => {
        fullScreen.style.display = "none";
    }, 3000);
});
