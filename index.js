// Your code goes here
const changeDom = document.addEventListener("DOMContentLoaded", () => {
  updateDOM();
})

const updateDOM = () => {
  document.getElementById("text").innerHTML = ("This is really cool!");
}
