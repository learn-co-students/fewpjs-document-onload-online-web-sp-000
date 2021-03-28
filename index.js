// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    updateIdText()
  });

  console.log("The DOM  outside of the function has loaded");

  function updateIdText() {
    document.getElementById( "text" )
      .innerHTML = "This is really cool!";
  }
