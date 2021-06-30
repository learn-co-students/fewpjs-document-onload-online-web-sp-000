// Change the text on the page when DOM content has loaded
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('p#text').innerHTML = "This is really cool!"
});
 
console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);