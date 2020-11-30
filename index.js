document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    let text = document.getElementById("text");
    text.textContent= "This is really cool!";
  });
// console.log(
//     "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
//   );

// // since Html5 a new similer and simpiler version of Dom content Loaded has been reconized 
// // that being defer used as below in the same manner 

// <script src= "index.js" defer></script>
// //This functions in a similar way to DOMContentLoaded - the JavaScript code stored in index.js
// // will be loaded up but won't execute until the HTML page completely loads.