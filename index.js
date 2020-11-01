// Your code goes here
text = document.getElementById("text")

document.addEventListener("DOMContentLoaded", function(){
    text.innerHTML =  "This is really cool!"

})

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );