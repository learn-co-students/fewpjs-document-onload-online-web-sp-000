// Your code goes here
let paragraph = document.getElementById("text");

document.addEventListener("DOMContentLoaded", function() {
    paragraph.textContent = "This is really cool!";
});

console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered");