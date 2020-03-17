document.addEventListener("DOMContentLoaded",function() {
    console.log("The DOM is loaded");
        let element = document.querySelector("p#text");
        element.innerHTML = "This is really cool!";
    });

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);
