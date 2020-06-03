// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    let elem = document.getElementById('text')
    elem.textContent = "This is really cool!"
  });

  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );