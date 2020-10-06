// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
  afterLoad()
});

function afterLoad(){
  let myText = document.getElementById("text")
  myText.textContent = "This is really cool!"
}
