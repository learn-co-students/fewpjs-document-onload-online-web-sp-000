// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
  const coolText = document.getElementById('text');
  coolText.textContent = "This is really cool!"; 
});
 
console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);