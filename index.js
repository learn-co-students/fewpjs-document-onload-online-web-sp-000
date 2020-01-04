// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
  tt = document.getElementById("text").innerHTML = "This is really cool!"
  return tt
});



console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);