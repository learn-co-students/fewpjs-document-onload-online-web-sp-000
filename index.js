// Your code goes here
let text = document.getElementById("text");
document.addEventListener("DOMContentLoaded", function() {
    text.textContent = "This is really cool!"
  });
   
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );