// Your code goes here

document.addEventListener("DOMContentLoaded", function(){
  alert("The DOM has loaded forsure");
  let text = document.getElementById("text");
  text.innerHTML = "This is really cool!";
});


// document.addEventListener("load", function(){
//   alert("The whole views file is loaded including CSS and images")
// });

console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);

