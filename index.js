// document.addEventListener("DOMContentLoaded", function() {
//     console.log("The DOM has loaded");
//   });

//   console.log(
//     "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
//   );
// let itemInput = document.getElementById('p[id=text');
// itemInput.textContent = "This is really cool!";
// var itemInput = document.querySelector('p[id ="text"]').textContent = "This is really cool!";




document.addEventListener("DOMContentLoaded", theDomHasLoaded, false);

function theDomHasLoaded(e) {
 let event = document.querySelector("p");
    event.textContent = "This is really cool!"

   }