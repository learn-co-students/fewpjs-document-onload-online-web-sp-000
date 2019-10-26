// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    paragraph = document.querySelector("p")
    paragraph.innerHTML = "This is really cool!"
  });
   
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );