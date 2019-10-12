// Your code goes here

document.addEventListener("DOMContentLoaded", function() {const obj = document.getElementById("text");
obj.textContent = "This is really cool!"
  });


  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  )